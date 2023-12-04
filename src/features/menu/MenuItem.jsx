import { formatCurrency } from '../../utilities/helpers';
import Button from '../../ui/Button';
import { addItem } from '../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import DeleteButton from '../../ui/DeleteButton';
import UpdateCartQuantity from '../cart/UpdateCartQuantity';

/* eslint-disable react/prop-types */
function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector((store) => store.cart.cart);

  const quan =
    currentQuantity.find((item) => item.pizzaId === id)?.quantity ?? 0;

  // console.log(isInCart);

  const isInCart = quan > 0;
  // console.log(id, isInCart);

  function handleAddItem() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="px:2 flex gap-4">
      <img
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p>{name}</p>
        <p className="text-sm capitalize italic text-slate-500">
          {ingredients.join(', ')}
        </p>
        <div className="mb-1 mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <>
              <UpdateCartQuantity pizzaId={id} quantity={quan} />
              <DeleteButton id={id} />
            </>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddItem}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
