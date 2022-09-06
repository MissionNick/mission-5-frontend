import { Outlet } from "react-router";
import NeedLogIn from "../pages/Login";

export default function PrivateRoutePolicyFamily({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <NeedLogIn />;
  } else {
    return <Outlet />;
  }
}
