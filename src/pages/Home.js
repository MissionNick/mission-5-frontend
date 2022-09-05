import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useState } from "react";
import SignupLogin from "../components/home/Signup-Login";
import axios from "axios";

export default function Home({ isLoggedIn, setisLoggedIn }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

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
          setIsModalOpen={setIsModalOpen}
          isLoggedIn={isLoggedIn}
          setisLoggedIn={setisLoggedIn}
        />
        <Header
          setIsModalOpen={setIsModalOpen}
          setIsSignUp={setIsSignUp}
          isLoggedIn={isLoggedIn}
        />
        <PageNav
          setIsModalOpen={setIsModalOpen}
          setIsSignUp={setIsSignUp}
          isLoggedIn={isLoggedIn}
        />
        <Body
          setIsModalOpen={setIsModalOpen}
          setIsSignUp={setIsSignUp}
          isLoggedIn={isLoggedIn}
        />

        <SiteIndex
          setIsModalOpen={setIsModalOpen}
          setIsSignUp={setIsSignUp}
          isLoggedIn={isLoggedIn}
        />

        <Footer />
        {isModalOpen && (
          <SignupLogin
            isSignUp={isSignUp}
            setIsSignUp={setIsSignUp}
            setIsModalOpen={setIsModalOpen}
            setisLoggedIn={setisLoggedIn}
          />
        )}
      </ErrorBoundary>
    </div>
  );
}
