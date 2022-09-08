import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'store/contacts/contacts-selectors';
import { changeFilter } from 'store/contacts/contacts-slice';
import { Input } from '../ui/Input.styled';

export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const changeFilterValue = e => {
    const inputValue = e.target.value;
    dispatch(changeFilter(inputValue));
  };

  return (
    <label>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilterValue} />
    </label>
  );
};
