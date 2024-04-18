import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors.js";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactsList}>
        {Array.isArray(filteredContacts) &&
          filteredContacts.length > 0 &&
          filteredContacts.map((contact) => (
            <div className={css.contactListItem}>
              <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
