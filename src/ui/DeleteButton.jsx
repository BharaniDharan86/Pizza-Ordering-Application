/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteItem } from '../features/cart/cartSlice';

function  DeleteButton({ id }) {
  const dispatch = useDispatch();

  function handleDelete(id) {
    console.log(id);
    dispatch(deleteItem(id));
  }

  return (
    <Button type="small" onClick={() => handleDelete(id)}>
      Delete
    </Button>
  );
}

export default DeleteButton;
