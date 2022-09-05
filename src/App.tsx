import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />} />
          <Route element={<PrivateRoute isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}>
            <Route path="/insurancepolicy" element={<Policy isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>}/>
          </Route>
          <Route element={ <PrivateRouteTeacher isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} /> }>
            <Route path="/teacher" element={ <ProjectLibrary isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}/>
            <Route path="/progress-tracker" element={ <ProgressTracker isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}/>
            <Route path="/student-profiles" element={ <StudentProfiles isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} /> }/>
            <Route path="/help-requests" element={<HelpRequests isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />} />
            <Route path="/project-submissions" element={<ProjectSubmissions isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;