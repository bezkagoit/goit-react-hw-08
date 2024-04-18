import React from "react";
import { ImPhone } from "react-icons/im";
import { ImUser } from "react-icons/im";
import css from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      <div className={css.paragraph}>
        <span className={css.contactName}>
          <ImUser />
          {name}
        </span>
        <span className={css.contactNumber}>
          <ImPhone />
          {number}
        </span>
      </div>
      <button
        className={css.contactDeleteBtn}
        onClick={() => handleDelete(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
