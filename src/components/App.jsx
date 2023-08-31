import { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { fetchContacts } from "../components/redux/contacts-operations";
import { getError, getIsLoading } from "../components/redux/selectors";

import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { Layout } from "./Layout/Layout";

export const App = () => {
const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  return (
<Layout>
      <h1
          style={{
            fontSize: '20px',
            alignItems: 'center',
          }}
        >Phonebook</h1>
        <ContactForm/>
        <h2 style={{
            fontSize: '20px',
            alignItems: 'center',
          }}>Contacts</h2>
        <Filter />
      {isLoading && !error ? <b>Request in progress...</b> : <ContactList />}
    </Layout>
    )
  }