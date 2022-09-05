import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/shared/Fallback";
import { errorHandler } from "../components/shared/ErrorHandler";
import { useState } from "react";
import axios from "axios";


import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/Header";
import PageNav from "../components/shared/PageNav";
import SignupLogin from "../components/shared/Login";
import SiteIndex from "../components/shared/SiteIndex";
import Footer from "../components/shared/Footer";


export default function Login({ isLoggedIn, setisLoggedIn }) {
  
  // localStorage.setItem('userID')
  axios
    .post("http://localhost:4000/checklogin", {}, { withCredentials: true })
    .then((res) => {
      console.log(res.data);
      setisLoggedIn(res.data);
    });

  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Navbar
          isLoggedIn={isLoggedIn}
          setisLoggedIn={setisLoggedIn}
        />
        <Header/>
        <PageNav />
        <SignupLogin
          setIsSignUp={setIsSignUp}
          isLoggedIn={isLoggedIn}
        />
        <SiteIndex />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
