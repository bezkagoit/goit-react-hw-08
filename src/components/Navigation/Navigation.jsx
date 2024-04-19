import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  const getNavLinkClassNames = ({ isActive }) =>
    clsx(css.headerLink, {
      [css.active]: isActive,
    });

  return (
    <nav className={css.navContainer}>
      <NavLink className={getNavLinkClassNames} to="/">
        Home
      </NavLink>
      {isSignedIn && (
        <NavLink className={getNavLinkClassNames} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
