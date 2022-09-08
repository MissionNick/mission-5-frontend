import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/shared/Fallback";
import { errorHandler } from "../components/shared/ErrorHandler";
import { UserContext } from "../helper/Context";

import Header from "../components/shared/Header";
import PageNav from "../components/menu/Menu";
import NeedLogin from "../components/login/Login";
import ChooseAccount from "../components/login/ChooseAccount";
import SiteIndex from "../components/shared/SiteIndex";
import Footer from "../components/shared/Footer";

export default function Login() {
  return (
    <div className="page_container">
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Header />
        <PageNav />
        <UserContext.Consumer>
          {({ isLoggedIn }) => {
            return <>{isLoggedIn ? <ChooseAccount /> : <NeedLogin />}</>;
          }}
        </UserContext.Consumer>
        <SiteIndex />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
