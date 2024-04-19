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
    <div className={css.contactItem}>
      <div className={css.paragraph}>
        <span className={css.contactName}>
          <ImUser className={css.iconContact} size="22" />
          {name}
        </span>
        <span className={css.contactNumber}>
          <ImPhone className={css.iconContact} size="22" />
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
    </div>
  );
};

export default Contact;
