import { Link } from 'react-router-dom';

import { getCartQuantity, getTotalPrice } from './cartSlice';
import { useSelector } from 'react-redux';

function CartOverview() {
  const totalQuantity = useSelector(getCartQuantity);

  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 text-sm font-semibold text-stone-300 md:text-base">
        <span>{totalQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
