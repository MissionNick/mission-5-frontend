import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/shared/Fallback";
import { errorHandler } from "../components/shared/ErrorHandler";


import Header from "../components/shared/Header";
import PageNav from "../components/menu/MenuRegistration";
import Landing from "../components/insurance/Landing";
import SiteIndex from "../components/shared/SiteIndex";
import Footer from "../components/shared/Footer";

export default function Home({ isLoggedIn }) {
  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Header isLoggedIn={isLoggedIn} />
        <PageNav />
        <Landing />
        <SiteIndex />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
