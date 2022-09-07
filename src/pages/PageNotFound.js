import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/shared/Fallback";
import { errorHandler } from "../components/shared/ErrorHandler";

import Header from "../components/shared/Header";
import PageNav from "../components/menu/MenuRegistration";
import Body from "../components/shared/PageNotFound";
import SiteIndex from "../components/shared/SiteIndex";
import Footer from "../components/shared/Footer";

export default function PageNotFound({ isLoggedIn }) {
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
