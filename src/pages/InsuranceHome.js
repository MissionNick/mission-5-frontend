import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/shared/Fallback";
import { errorHandler } from "../components/shared/ErrorHandler";


import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/Header";
import PageNav from "../components/shared/PageNav";
import Body from "../components/insurance/Body";
import SiteIndex from "../components/shared/SiteIndex";
import Footer from "../components/shared/Footer";



export default function Home({ isLoggedIn, setisLoggedIn }) {
  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
        <Header />
        <PageNav />
        <Body />
        <SiteIndex />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
