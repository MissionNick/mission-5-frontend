import auth from "../hooks/auth";

const tryLogin = (userDetails:any,setUserDetails:Function,setIsLoggedIn:Function) => {   
   
   const result = auth(userDetails.email,userDetails.password)
   setIsLoggedIn(!result.error);
   console.log('TryAuth Result -',result)
   return result;
}

export default tryLogin;