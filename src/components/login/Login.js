import styles from "../styles/Login.module.css";
import { useState } from "react";
import { UserContext } from "../../helper/Context";
import tryLogin from "./tryLogin";

const { submitButton, login_container, email, font, password, mainBody } =
  styles;

function Login() {
  //const [isLoggedIn, setIsLoggedIn] = useState();
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs.email);
  };

  const handleSubmit = (
    userDetails,
    isLoggedIn,
    setUserDetails,
    setIsLoggedIn
  ) => {
    const tryUser = { email: "", password: "" };
    tryUser.email = inputs.email;
    tryUser.password = inputs.pwd;
    setUserDetails(tryUser); //change to input.email
    tryLogin(userDetails, setUserDetails, setIsLoggedIn);
    console.log("User Details", userDetails);
  };

  return (
    <UserContext.Consumer>
      {({ userDetails, isLoggedIn, setUserDetails, setIsLoggedIn }) => {
        return (
          <div className={mainBody}>
            <div className={login_container}>
              <form>
                <label for="email" className={font}>
                  <br />
                  <b>Email</b>
                  <br />
                  <input
                    className={email}
                    name="email"
                    type="email"
                    value={inputs.email}
                    onChange={handleChange}
                  />
                </label>
                <label className="writing">
                  <br />
                  <b>Password</b>
                  <br />
                  <input
                    className={password}
                    name="pwd"
                    type="passport"
                    value={inputs.pwd}
                    onChange={handleChange}
                  />
                </label>
                <label className={font}>
                  <br />
                  <input
                    type="checkbox"
                    checked="checked"
                    name="remember"
                    styleName="margin-bottom:15px"
                  />
                  Remember me
                </label>
                <br />
                <button
                  className={submitButton}
                  type="button"
                  onClick={() =>
                    handleSubmit(
                      userDetails,
                      isLoggedIn,
                      setUserDetails,
                      setIsLoggedIn
                    )
                  }
                >
                  {" "}
                  Login{" "}
                </button>
              </form>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
export default Login;
