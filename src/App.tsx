import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import PrivateRoutePolicyMember from "./pages/PrivateRoutePolicyMember";
import PrivateRoutePolicyOwner from "./pages/PrivateRoutePolicyOwner";
import Home from "./pages/Home"
import InsuranceHome from "./pages/InsuranceHome";
import Login from "./pages/Login"
import Register from "./pages/Register"
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/register"
            element={<Register isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/insurance"
            element={<InsuranceHome isLoggedIn={isLoggedIn} />}
          />
          <Route element={<PrivateRoutePolicyOwner isLoggedIn={isLoggedIn} />}>
            <Route
              path="/insurance/accounts"
              element={<InsuranceHome isLoggedIn={isLoggedIn} />}
            />
          </Route>
          <Route element={<PrivateRoutePolicyMember isLoggedIn={isLoggedIn} />}>
            <Route
              path="/insurance/policy"
              element={<InsuranceHome isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/insurance/claim"
              element={<InsuranceHome isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/insurance/documents"
              element={<InsuranceHome isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/insurance/car"
              element={<InsuranceHome isLoggedIn={isLoggedIn} />}
            />
          </Route>
          <Route path="*" element={<PageNotFound isLoggedIn={isLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;