import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/shared/Fallback";
import { errorHandler } from "../components/shared/ErrorHandler";

import Header from "../components/shared/Header";
import PageNav from "../components/shared/PageNav";
import LoginBody from "../components/shared/Login";
import SiteIndex from "../components/shared/SiteIndex";
import Footer from "../components/shared/Footer";

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Header isLoggedIn={isLoggedIn} />
        <PageNav />
        <LoginBody isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <SiteIndex />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
