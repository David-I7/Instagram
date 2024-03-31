import { Navigate } from "react-router-dom";
import Birthday from "../../features/authentication/pages/Birthday";

const TestRoutes = () => {
  const loggedIn = false;
  return <>{loggedIn ? <Birthday /> : <Navigate to={"/login"} />}</>;
};

export default TestRoutes;
