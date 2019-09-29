import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

const Cart = ({ cart, removeFromCart }) => (
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
              <button onClick={() => removeFromCart(product.id)}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
