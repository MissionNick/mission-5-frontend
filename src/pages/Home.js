import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/shared/Fallback";
import { errorHandler } from "../components/shared/ErrorHandler";

import Header from "../components/shared/Header";
import Menu from "../components/menu/Menu";
import Body from "../components/home/Home";
import SiteIndex from "../components/shared/SiteIndex";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <div className="page_container">
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Header/>
        <Menu />
        <Body />
        <SiteIndex />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
