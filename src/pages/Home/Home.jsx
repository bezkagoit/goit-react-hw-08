import { Link } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.phonebookContainer}>
      <div className={css.container}>
        <div className={css.homeContainer}>
          <h1 className={css.title}>Phonebook</h1>
          <span className={css.icon}>
            <MdContactPhone />
          </span>
          <h1 className={css.text}>Create your´s phonebook</h1>
          <div>
            <p className={css.textLast}>
              To access to your´s contacts, you need to login with your email
              and password.
            </p>
          </div>
          <div className={css.textBlock}>
            <Link className={css.link} to="/login">
              Login to search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
