import Auth from "./features/authentication/Index";
import Cookies from "./features/cookies/Index";
import { Route, Routes } from "react-router-dom";
import TestComponent from "./components/common/TestComponent";
import EmailSignup from "./features/authentication/pages/EmailSignup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<TestComponent />} />
          <Route
            path="login"
            element={
              <>
                {" "}
                <Cookies /> <Auth />{" "}
              </>
            }
          />
          <Route path="/emailsignup" element={<EmailSignup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
