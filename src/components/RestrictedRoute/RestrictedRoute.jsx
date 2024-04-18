import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/contacts",
}) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return isSignedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
