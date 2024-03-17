import Auth from "./features/authentication/Index";
import Cookies from "./features/cookies/Index";
import { Route, Routes } from "react-router-dom";
import TestRoutes from "./components/common/TestRoutes";
import EmailSignup from "./features/authentication/pages/EmailSignup";
import ResetPassword from "./features/authentication/pages/ResetPassword";
import TestComponent from "./components/common/TestComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<TestRoutes />} />
          <Route path="test" element={<TestComponent />} />
          <Route
            path="login"
            element={
              <>
                {" "}
                <Cookies /> <Auth />{" "}
              </>
            }
          />
          <Route path="emailsignup" element={<EmailSignup />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
