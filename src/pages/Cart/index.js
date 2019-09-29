import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

const Cart = ({ cart, dispatch }) => (
  <Container>
    <ProductTable>
      <thead>
        <tr>
          <th> </th>
          <th>Produto</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {cart.map(product => (
          <tr>
            <td>
              <img src={product.image} alt={product.title} />
            </td>
            <td>
              <strong>{product.title}</strong>
              <span>{product.priceFormated}</span>
            </td>
            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={product.ammount} />
                <button>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', id: product.id })
                }
              >
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </ProductTable>

    <footer>
      <button>Finalizar pedido</button>

      <Total>
        <span>TOTAL</span>
        <strong>R$1920</strong>
      </Total>
    </footer>
  </Container>
);

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
