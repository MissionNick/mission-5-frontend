import auth from "../hooks/auth";

const tryLogin = (userDetails:any,setUserDetails:Function,setIsLoggedIn:Function) => {   
   setIsLoggedIn(userDetails.error);
   return auth(userDetails.email);
}

export default tryLogin;