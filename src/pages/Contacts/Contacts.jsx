import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

import ContactList from "../../components/ContactList/ContactList";
import { useDispatch } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";

import css from "./Contacts.module.css";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.main}>
      <h2 className={css.title}>Phonebook</h2>
      <div className={css.positionContainer}>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
