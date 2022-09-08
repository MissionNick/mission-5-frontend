import styles from "../styles/Login.module.css";
import { useState } from "react";
import { UserContext } from "../../helper/Context";
import tryLogin from "./tryLogin";

const { submitButton, login_container, inputBox } = styles;

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
    //event.preventDefault();
    setUserDetails({ email: "test@test.com" })   //change to input.email
    tryLogin(userDetails, setUserDetails, setIsLoggedIn)
  }

  return (
    <UserContext.Consumer>
      {(userDetails, isLoggedIn, setUserDetails, setIsLoggedIn) => {
         return (
          <div className={login_container}>
            <form onSubmit={()=> handleSubmit(userDetails,isLoggedIn,setUserDetails,setIsLoggedIn)}>
              <label>
                Email:
                <input
                  className={inputBox}
                  name="email"
                  type="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Password:
                <input
                  className={inputBox}
                  name="pwd"
                  type="text"
                  value={inputs.pwd}
                  onChange={handleChange}
                />
              </label>
              <input className={submitButton} type="submit" value="Submit" />
            </form>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
export default Login;
