import { deleteContact } from '../redux/contacts-operations';
import { Btn,ContactPhone } from '../ContactList/ContactList.styled';
import { useDispatch } from 'react-redux';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
       <p> {contact.name}:
        <ContactPhone>{contact.phone}</ContactPhone>
      </p>
      <Btn onClick={handleDelete}>delete</Btn>
    </>
  );
};
export default Contact;