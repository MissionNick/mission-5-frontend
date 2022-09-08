import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import PrivateRoutePolicyMember from "./pages/PrivateRoutePolicyMember";
import PrivateRoutePolicyOwner from "./pages/PrivateRoutePolicyOwner";
import Home from "./pages/Home";
import InsuranceHome from "./pages/InsuranceHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./helper/Context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState();

  return (
    <UserContext.Provider value={{ isLoggedIn, userDetails, setUserDetails,setIsLoggedIn }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login" element={<Login />}
          />
          <Route
            path="/register"element={<Register />}
          />
          <Route
            path="/insurance"
            element={<InsuranceHome />}
          />
          <Route element={<PrivateRoutePolicyOwner />}>
            <Route
              path="/insurance/accounts"
              element={<InsuranceHome  />}
            />
          </Route>
          <Route element={<PrivateRoutePolicyMember  />}>
            <Route
              path="/insurance/policy"
              element={<InsuranceHome  />}
            />
            <Route
              path="/insurance/claim"
              element={<InsuranceHome  />}
            />
            <Route
              path="/insurance/documents"
              element={<InsuranceHome  />}
            />
            <Route
              path="/insurance/car"
              element={<InsuranceHome  />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
