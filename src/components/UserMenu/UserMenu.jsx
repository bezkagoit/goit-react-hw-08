import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiLogoutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userName = user ? user.name : "";
  const onLogout = () => {
    dispatch(apiLogoutUser());
  };
  return (
    <div className={css.UserMenuName}>
      <p className={css.userMenuText}>
        Hello, <span className={css.spanUserName}>{userName}!</span>
      </p>
      <button className={css.buttonLogOut} type="button" onClick={onLogout}>
        Sign out
      </button>
    </div>
  );
};

export default UserMenu;
