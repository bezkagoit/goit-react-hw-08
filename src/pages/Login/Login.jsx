import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectUserIsLoading } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import { apiLoginUser } from "../../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();

  const onLogin = (formData) => {
    dispatch(apiLoginUser(formData));
  };
  const loader = useSelector(selectUserIsLoading);

  return <div>{loader ? <Loader /> : <LoginForm onLogin={onLogin} />}</div>;
};

export default Login;
