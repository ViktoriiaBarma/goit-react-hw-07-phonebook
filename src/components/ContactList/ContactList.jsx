import React from "react";
import { Item, List } from './ContactList.styled';
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../redux/selectors";
import Contact from "../Contact/Contact";

const ContactList = () => {

  const contacts = useSelector(getContacts);
   console.log(contacts);
  const filter = useSelector(getFilter);
   console.log(filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
   return (
    <List>
      {filteredContacts && filteredContacts.map((contact) => {
        return (
          <Item key={contact.id}>
             <Contact key={contact.id} contact={contact} />
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;









