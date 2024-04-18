import React from "react";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useDispatch } from "react-redux";
import { apiRegisterUser } from "../../redux/auth/operations";

const Registration = () => {
  const dispatch = useDispatch();

  const onRegister = (formData) => {
    dispatch(apiRegisterUser(formData));
  };

  return (
    <div>
      <RegistrationForm onRegister={onRegister} />
    </div>
  );
};

export default Registration;
