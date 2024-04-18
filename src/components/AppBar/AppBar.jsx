import React from "react";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

import css from "./AppBar.module.css";

const AppBar = () => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return (
    <div className={css.nav}>
      <Navigation />

      {isSignedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
