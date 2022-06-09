import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    // TODO: gerar cartItemsAmount, valores na frente do botão com o carrinho
    /*cartItemsAmount: Deve possuir as informações da quantidade de cada produto no carrinho. Sugerimos criar um objeto 
    utilizando reduce onde a chave representa o id do produto e o valor a quantidade do produto no carrinho. 
    Exemplo: se você possuir no carrinho um produto de id 1 e quantidade 4 e outro produto de id 2 e quantidade 3 */
    const newSumAmount = {...sumAmount};
    newSumAmount[product.id] = product.amount; //criando a chave de uma forma dinamica = newSumAmount.5|| 1||2... e associando com a quantidade
    
    return newSumAmount;
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      // TODO: carregar produtos da api
      const response = await api.get<Product[]>(`/products`);//<Product[]> tipagem pelo generic
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)//importação pronta do preço formatado pra $
      }))

      setProducts(data)
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    // TODO: adicionar um produto
    addProduct(id); //a funcionalidade de adicionar está dentro do hook useCard, então só chamamos a função
  }

  return (
    <ProductList>
      {products.map(product =>(
              <li key={product.id}>
              <img src={product.image} alt={product.title}/>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
              <button
                type="button"
                data-testid="add-product-button"
                onClick={() => handleAddProduct(product.id)}
              >
                <div data-testid="cart-product-quantity">
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {cartItemsAmount[product.id] || 0}
                </div>
      
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
      ))}
    </ProductList>
  );
};

export default Home;
