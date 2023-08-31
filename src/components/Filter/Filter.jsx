import { useDispatch } from 'react-redux';
import { filterContact } from '../redux/contactsSlice';
import { Input, LabelDescr } from './Filter.styled';

const Filter = () => {
   const dispatch = useDispatch()
  const hendleFilter = (e) => {
    dispatch(filterContact(e.currentTarget.value))
  }

  return (
    <LabelDescr htmlFor="filter">
      Find contacts by name
      <Input name="filter" type="text" onChange={hendleFilter} />
    </LabelDescr>
  );
};

export default Filter;