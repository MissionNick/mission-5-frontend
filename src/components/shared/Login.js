import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Login({
  isSignUp,
  setIsSignUp,
  setIsModalOpen,
  setisLoggedIn,
}) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userConfirm, setUserConfirm] = useState("");

  const [errMessageUser, setErrMessageUser] = useState("");
  const [errIsVisible, setErrIsVisible] = useState(false);

  function displayError(msg) {
      setErrMessageUser(msg);
      setErrIsVisible(true);
      setTimeout(() => {
        setErrIsVisible(false);
        setErrMessageUser("");
      }, 3000);

  }

  function clearField() {
    setUserPass("");
    setConfirm("");
  }

  function signUp() {

  }


  return (
    <div>
Sign up
    </div>
  );
}
