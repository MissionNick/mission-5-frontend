import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/shared/Fallback";
import { errorHandler } from "../components/shared/ErrorHandler";

import Header from "../components/shared/Header";
import PageNav from "../components/shared/PageNav";
import Body from "../components/registration/Body";
import SiteIndex from "../components/shared/SiteIndex";
import Footer from "../components/shared/Footer";

export default function Register({ isLoggedIn }) {
  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Header isLoggedIn={isLoggedIn} />
        <PageNav />
        <Body />
        <SiteIndex />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
