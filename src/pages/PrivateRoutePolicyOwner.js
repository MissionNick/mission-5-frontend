import { Outlet } from "react-router";
import axios from "axios";
import NeedLogIn from "../components/shared/NeedLogIn";


export default function PrivateRoutePolicyOwner({ isLoggedIn, setisLoggedIn }) {
  const type = sessionStorage.getItem("userType");
  axios
    .post("http://localhost:4000/checklogin", {}, { withCredentials: true })
    .then((res) => {
      console.log(res.data);
      setisLoggedIn(res.data);
    });
  if (!isLoggedIn | (type !== "POLICY-OWNER")) {
    return <NeedLogIn userType="POLICY-OWNER" />;
  } else {
    return <Outlet />;
  }
}

