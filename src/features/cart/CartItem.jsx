/* eslint-disable react/prop-types */
import DeleteButton from '../../ui/DeleteButton';
import { formatCurrency } from '../../utilities/helpers';
import UpdateCartQuantity from './UpdateCartQuantity';

function CartItem({ item }) {
  // eslint-disable-next-line no-unused-vars
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="px-1 py-4 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-3">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-44 sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateCartQuantity pizzaId={pizzaId} quantity={quantity} />
        <DeleteButton id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
