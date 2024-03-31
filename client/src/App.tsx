import Auth from "./features/authentication/Index";
import Cookies from "./features/cookies/Index";
import { Route, Routes } from "react-router-dom";
import TestRoutes from "./components/common/TestRoutes";
import EmailSignup from "./features/authentication/pages/EmailSignup";
import ResetPassword from "./features/authentication/pages/ResetPassword";
import Birthday from "./features/authentication/pages/Birthday";
import TestComponent from "./components/common/TestComponent";
import EmailSignupConfirmation from "./features/authentication/pages/EmailSignupConfirmation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<TestRoutes />} />
          <Route path="test" element={<TestComponent />} />
          <Route path="login">
            <Route
              index
              element={
                <>
                  {" "}
                  <Cookies /> <Auth />{" "}
                </>
              }
            ></Route>
            <Route path="resetpassword" element={<ResetPassword />} />
          </Route>
          <Route path="emailsignup">
            <Route index element={<EmailSignup />} />
            <Route path="confirmation" element={<EmailSignupConfirmation />} />
            <Route path="birthday" element={<Birthday />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
