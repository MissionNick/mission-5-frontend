import { Outlet } from "react-router";
import NeedLogIn from "../pages/Login";
import { UserContext } from "../helper/Context";

export default function PrivateRoutePolicyFamily() {
  return (
    <UserContext.Consumer>
      (!isLoggedIn)? <NeedLogIn /> <Outlet />
    </UserContext.Consumer>
  );
}
