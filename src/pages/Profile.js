import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from "../components/shared/Fallback";
import { errorHandler } from "../components/shared/ErrorHandler";


import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer"
import Home from "../components/home"


export default function Profile({ isLoggedIn, setisLoggedIn }) {
  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
        <Home />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
