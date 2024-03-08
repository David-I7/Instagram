import Login from "./pages/Login";
import CookiesModal from "./components/modals/CookiesModal";
import { Route, Routes } from "react-router-dom";
import TestComponent from "./components/common/TestComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<TestComponent />} />
          <Route
            path="register"
            element={
              <>
                {" "}
                <CookiesModal /> <Login />{" "}
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
