import { formatCurrency } from '../../utilities/helpers';

/* eslint-disable react/prop-types */
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(ingredients);

  return (
    <li className="p-2.5">
      <div className="flex items-center justify-between text-sm">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
        <p>{ingredients?.join(',')}</p>
      </div>
    </li>
  );
}

export default OrderItem;
