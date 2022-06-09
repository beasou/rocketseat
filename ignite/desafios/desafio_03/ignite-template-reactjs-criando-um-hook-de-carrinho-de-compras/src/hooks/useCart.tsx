import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
     const storagedCart = localStorage.getItem('@RocketShoes:cart'); //Deve verificar se existe algum registro com o valor @RocketShoes:cart e retornar esse valor caso existir. Caso contrário, retornar um array vazio.
     if (storagedCart) {
       return JSON.parse(storagedCart);
   }

    return [];
  });

  /*Para preservar os dados do carrinho mesmo se fecharmos a aplicação, utilizaremos a localStorage API */
  const prevCarRef = useRef<Product[]>() //referencia

  useEffect(()=>{ //vai rodas todas as vezes que renderizar novamente
    prevCarRef.current = cart
  })//pra rodar td vez, não passo nd no array de dependencia

  const cartPreviousValue = prevCarRef.current ?? cart //vai pegar prevCarRef.current se ele existir, pois ele retorna a primeira vez como um undefined, e isso não pode acontecer, pois quando rodar a verificação de cartPreviousValue, ele vai entender que é diferente e vai dat um setItem(atualizar). Então se for undefined ou null(false), ele vai atribuir o valor de card na primeira passagem, depois ele atribui o prevCarRef.current

  useEffect(()=>{ //comparação
    if (cartPreviousValue !== cart){ //valor anterior do carrinho é diferente do atual, significa que teve uma atualização do carrinho ele aplica o setItem
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(cart))
    }
  }, [cart, cartPreviousValue])

  const addProduct = async (productId: number) => {
    try {
      /* TODO: Deve adicionar um produto ao carrinho. Porém, é preciso verificar algumas coisas:
      O valor atualizado do carrinho deve ser perpetuado no localStorage utilizando o método setItem.
      Caso o produto já exista no carrinho, não se deve adicionar um novo produto repetido, apenas incrementar em 1 unidade a quantidade;
      Verificar se existe no estoque a quantidade desejada do produto. Caso contrário, utilizar o método error da react-toastify com a 
      seguinte mensagem: toast.error('Quantidade solicitada fora de estoque');*/

      const updatedCart = [...cart]; //criando novo array a partir do valor que eu quero do carrinho
      
      const productExists = updatedCart.find(product => product.id === productId)
      /*verificando se o produto existe, verificando se o produto que estou interando chegou no valor do produto do argumento, 
      se é igual o valor que recebi na função "productId", se for igual o produto existe se não for o produto não existe */
      
      const stock = await api.get(`/stock/${productId}`); //vou colocar o id na barra pra resgatar dado de acordo com id

      const stockAmount = stock.data.amount;
      const currentAmount = productExists ? productExists.amount : 0; /*quantidade atual no carrinho, se o produto existe no carrinho, pego o amount dele, se não existe a quantidade dele é 0 */
      
      const amount = currentAmount + 1 //quantidade desejada valor atual +1

      if (amount > stockAmount){//VERIFICANDO ESTOQUE
        //se a quantidade desejada for maior que a em estoque
        toast.error('Quantidade solicitada fora de estoque'); //mensagem de erro/ quantidade desejada do produto
        return; //pra parar não fazer mais nada
      }

      if(productExists){ //VERIFICANDO SE PRODUTO EXISTE
        //se o produto ja esta no carrinho vai atulizar a quantidade do produto
        productExists.amount = amount;
      }else{
        //se não esta, vai add o produto ao carrinho 
        const product = await api.get(`/products/${productId}`);

        const newProduct = { //o Product(/types.ts) espera receber um amount, o retorno da api protutos é id,title,price,image. Então add 1
          ...product.data,
          amount: 1
        }
        updatedCart.push(newProduct)
      }
      setCart(updatedCart) //atualizador de estado
      
      /*Para salvar os dados, você deve utilizar o método setItem. 
      Como primeiro argumento você deve informar o nome que você quer dar para o registro, no caso desse desafio 
      é obrigatório utilizar o nome @RocketShoes:cart. Já o segundo argumento é o valor do registro que obrigatoriamente 
      precisa estar no formato string. */
    //  localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart)) 
    } catch {
      /* TODO: Capturar utilizando trycatch os erros que ocorrerem ao longo do método e, no catch, 
      utilizar método error da react-toastify com a seguinte mensagem:*/
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      // TODO
      const updatedCart =[... cart]
      const productIndex = updatedCart.findIndex(product => product.id === productId)
      
      //se ele encontrou
      if(productIndex >= 0){ //se o findIndex não encontra retorna -1, então se encontrou o productIndex seria = ou maior que 0
        updatedCart.splice(productIndex, 1)//splice(onde quero começar a deletar, a quantidade de itens que quero deletar)
        setCart(updatedCart)
      //  localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart)) 
      }else{// se não encontrou
        throw Error() //forço a dar erro ai ele cai no catch
      }

    } catch {
      // TODO: mensagem de erro 
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount, //aqui ja é o valor desejado
  }: UpdateProductAmount) => { /*Deve atualizar a quantidade de um produto no carrinho. 
  Porém, é preciso verificar algumas coisas:
    . O valor atualizado do carrinho deve ser perpetuado no localStorage utilizando o método setItem.
    . Se a quantidade do produto for menor ou igual a zero, sair da função updateProductAmount instantaneamente.
    . 
  */
    try {
      // TODO: Verificar se existe no estoque a quantidade desejada do produto. Caso contrário, utilizar o método error da react-toastify com a seguinte mensagem toast.error('Quantidade solicitada fora de estoque');:
      if(amount <= 0){ //se a quantia for menor ou igual a 0,
        return; //sair sem alterar nada
      }

      //VERIFICAÇÃO DO ESTOQUE 
      const stock = await api.get(`/stock/${productId}`)
      const stockAmount = stock.data.amount
      
      if(amount > stockAmount){
        toast.error('Quantidade solicitada fora de estoque');
        return //cancelar a execução
      }

      const updatedCart = [...cart]
      const productExists = updatedCart.find(product => product.id === productId)

      if(productExists){ //se o produto existe
        productExists.amount = amount
        setCart(updatedCart)
     //   localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart)) 
      } else{ // se não encontrar, se ñ existe
        throw Error() //forço a dar erro, pois se é um update tem q ter algo pra ser alterado
      }
    } catch {
      // TODO: Capturar utilizando trycatch os erros que ocorrerem ao longo do método e, no catch, utilizar o método error da react-toastify com a seguinte mensagem:
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
