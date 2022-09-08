import styles from "../styles/Login.module.css";
import { useState } from "react";
import { UserContext } from "../../helper/Context";
import tryLogin from "./tryLogin";

const { submitButton, login_container, email, font, password, mainBody,subSection } =
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
    setUserDetails(tryLogin(userDetails, setUserDetails, setIsLoggedIn))
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
                  <b>Email:</b>
                  <br />
                  <input
                    className={email}
                    name="email"
                    type="email"
                    value={inputs.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="writing">
                  <br />
                  <b>Password:</b>
                  <br />
                  <input
                    className={password}
                    name="pwd"
                    type="password"
                    value={inputs.pwd}
                    onChange={handleChange}
                    required
                  />
                </label>
                <div className={subSection}>
                  <p>Forgot password?</p>
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
                </div>
              </form>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
export default Login;
