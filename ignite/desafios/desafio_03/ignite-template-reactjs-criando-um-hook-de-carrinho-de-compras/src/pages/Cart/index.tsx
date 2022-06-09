import React from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';
import { Container, ProductTable, Total } from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}
/*Você deve renderizar uma tabela com a imagem, título, preço unitário, 
quantidade de unidades e preço subtotal de cada produto no carrinho. 
Além disso, também é preciso renderizar o preço total do carrinho. 
Por fim, é preciso implementar as funcionalidades dos botões de decrementar, 
incrementar e remover o produto do carinho.
Nesse arquivo, temos cinco pontos importantes a serem implementados: */
const Cart = (): JSX.Element => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map(product => ({
    /* TODO: cartFormatted: Deve formatar o carrinho adicionando os campos 
    priceFormatted (preço do produto) e subTotal (preço do produto multiplicado 
    pela quantidade) ambos devidamente formatados com o utils/format.*/
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount)
  }))
  const total =
    formatPrice(
      cart.reduce((sumTotal, product) => {
        /* TODO: total: Deve possuir a informação do valor total do carrinho 
        devidamente formatado com o utils/format.*/
        return sumTotal + product.price * product.amount
      }, 0)
    )

  function handleProductIncrement(product: Product) {
    // TODO: handleProductIncrement: Deve aumentar em 1 unidade a quantidade do produto escolhido ao carrinho.
    updateProductAmount({productId: product.id, amount: product.amount + 1})
  }

  function handleProductDecrement(product: Product) {
    /* TODO: handleProductDecrement: Deve diminuir em 1 unidade a quantidade do produto escolhido ao carrinho, 
    onde o valor mínimo é 1 (nesse caso o botão deve estar desativado).*/
    updateProductAmount({productId: product.id, amount: product.amount - 1})
  }

  function handleRemoveProduct(productId: number) {
    // TODO: handleRemoveProduct: Deve remover o produto escolhido do carrinho.
    removeProduct(productId)
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map(product =>(
             <tr key={product.id} data-testid="product">
             <td>
               <img src={product.image} alt={product.title} />
             </td>
             <td>
               <strong>{product.title}</strong>
               <span>{product.priceFormatted}</span>
             </td>
             <td>
               <div>
                 <button
                   type="button"
                   data-testid="decrement-product"
                 disabled={product.amount <= 1}
                 onClick={() => handleProductDecrement(product)}
                 >
                   <MdRemoveCircleOutline size={20} />
                 </button>
                 <input
                   type="text"
                   data-testid="product-amount"
                   readOnly
                   value={product.amount}
                 />
                 <button
                   type="button"
                   data-testid="increment-product"
                 onClick={() => handleProductIncrement(product)}
                 >
                   <MdAddCircleOutline size={20} />
                 </button>
               </div>
             </td>
             <td>
               <strong>{product.subTotal}</strong>
             </td>
             <td>
               <button
                 type="button"
                 data-testid="remove-product"
               onClick={() => handleRemoveProduct(product.id)}
               >
                 <MdDelete size={20} />
               </button>
             </td>
           </tr>
          ))}
         
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
