import styles from "../styles/Login.module.css"
import { useState } from 'react'

const {submitButton,login_container,email,font,password,mainBody}  = styles;


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
  <div className={mainBody}> 
    <div className={login_container}>
      <form onSubmit={handleSubmit}>
                    <label for="email" className={font}>
                    <br/>
                    <b>Email</b>
                    <br/>
                          <input className={email} name="email" type="email" value={inputs.email} onChange={handleChange} />
                    </label>
                    <label className="writing">
                    <br/>
                    <b>Password</b>
                    <br/>
                          <input className={password} name= "pwd" type="passport" value={inputs.pwd} onChange={handleChange} />
                    </label>
                    <label className={font}>
                      <br/>
                      <input type="checkbox" checked="checked" name="remember" styleName="margin-bottom:15px" /> 
                      Remember me
                    </label>
                    <br/>
            <input className={submitButton} type="submit" value="Submit" />
              </form>
      </div>
   </div> 
  )
}
export default Login
   
  



