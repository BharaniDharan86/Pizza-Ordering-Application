/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';

import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const { userName } = useSelector((store) => store.user);

 

  if (cart.length < 1) return <EmptyCart />;

  return (
    <div className="px-4 py-1">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-bold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((cart, i) => {
          return <CartItem item={cart} key={i} />;
        })}
      </ul>

      <div className="mt-6 space-x-3">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button
          type="secondary"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
