import styles from "../styles/Login.module.css"
import { useState } from 'react'

const submitButton = styles;
const login_container = styles;
const inputBox = styles;

 function Login({isLoggedIn,setIsloggedIn}) {

  //const [isLoggedIn, setIsLoggedIn] = useState();
   const [inputs, setInputs] = useState({});

  const handleChange = (event) =>{
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))  

}

const handleSubmit = (event) => {
  event.preventDefault();
  alert(inputs)
}
  return (
    <div className={login_container}>
      <form onSubmit={handleSubmit}>
                    <label>
                          Email:
                          <input className={inputBox} name="email" type="email" value={inputs.email} onChange={handleChange} />
                    </label>
                    <label>
                          Password:
                          <input className={inputBox} name= "pwd" type="text" value={inputs.pwd} onChange={handleChange} />
                    </label>
            <input className={submitButton} type="submit" value="Submit" />
              </form>
    </div>
  )
}
export default Login
   
  



