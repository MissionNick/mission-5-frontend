import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/shared/Fallback";
import { errorHandler } from "../components/shared/ErrorHandler";

import Header from "../components/shared/Header";
import PageNav from "../components/menu/Menu";
import Body from "../components/registration/InsuranceRegistration";
import SiteIndex from "../components/shared/SiteIndex";
import Footer from "../components/shared/Footer";

export default function Register() {
  return (
    <div className="page_container">
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Header />
        <PageNav />
        <Body />
        <SiteIndex />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
