import React from 'react';
import classes from './Cart.module.css';

import {useSelector} from 'react-redux';

import Card from '../UI/Card';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => <CartItem
            key={item.itemId}
            item={{ 
              title: item.name, 
              quantity: item.quantity, 
              total: item.totalPrice, 
              price: item.price,
              id: item.itemId
            }}
          />
        )}
      </ul>
    </Card>
  );
};

export default Cart;
