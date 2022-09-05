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
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />} />
          <Route path="/register" element={<Register isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />} />
          <Route path="/insurance" element={<InsuranceHome isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />} />
          <Route element={<PrivateRoutePolicyOwner isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}>
            <Route path="/insurance/accounts" element={<InsuranceHome isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>}/>
          </Route>
          <Route element={ <PrivateRoutePolicyMember isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} /> }>
            <Route path="/insurance/policy" element={ <InsuranceHome isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}/>
            <Route path="/insurance/claim" element={ <InsuranceHome isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}/>
            <Route path="/insurance/documents" element={ <InsuranceHome isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}/>
            <Route path="/insurance/car" element={ <InsuranceHome isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}/>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;