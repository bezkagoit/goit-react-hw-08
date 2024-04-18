import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import clsx from "clsx";

import css from "./AuthNav.module.css";

const AuthNav = () => {
  const getNavLinkClassNames = ({ isActive }) =>
    clsx(css.headerLink, {
      [css.active]: isActive,
    });

  return (
    <div className={css.authNavContainer}>
      <NavLink to="/register" className={getNavLinkClassNames}>
        Sign Up
      </NavLink>
      <NavLink to="/login" className={getNavLinkClassNames}>
        Sign in
      </NavLink>
    </div>
  );
};

export default AuthNav;
