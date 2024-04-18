import css from "./App.module.css";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiRefreshUser } from "./redux/auth/operations";

import Loader from "./components/Loader/Loader";

import Layout from "./components/Layout/Layout";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Register = lazy(() => import("./pages/Register/Register.jsx"));
const Login = lazy(() => import("./pages/Login/Login.jsx"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts.jsx"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/register"
                element={<RestrictedRoute component={Register} />}
                redirectTo="/contacts"
              />
              <Route
                path="/login"
                element={<RestrictedRoute component={Login} />}
                redirectTo="/contacts"
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={Contacts} redirectTo="/login" />
                }
              />
            </Routes>
          </Suspense>
        </div>
      </Layout>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
