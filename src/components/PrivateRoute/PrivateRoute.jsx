import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectUserIsRefreshing,
  selectUserIsSignedIn,
} from "../../redux/auth/selectors";

const PrivateRoute = ({ component: Component, redirectTo = "/register" }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return isSignedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
