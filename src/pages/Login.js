import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/shared/Fallback";
import { errorHandler } from "../components/shared/ErrorHandler";

import Header from "../components/shared/Header";
import PageNav from "../components/menu/MenuRegistration";
import LoginBody from "../components/login/Login";
import SiteIndex from "../components/shared/SiteIndex";
import Footer from "../components/shared/Footer";

export default function Login() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Header />
        <PageNav />
        <LoginBody />
        <SiteIndex />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
