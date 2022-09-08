import auth from "../hooks/auth";

const tryLogin = (userDetails:any,setUserDetails:Function,setIsLoggedIn:Function) => {   
   
   const result = auth(userDetails.email,userDetails.password)
   setIsLoggedIn(!result.error);
   return result;
}

export default tryLogin;