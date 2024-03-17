import { Navigate } from "react-router-dom";

const TestRoutes = () => {
  const loggedIn = false;
  return <>{loggedIn ? <h1>Home</h1> : <Navigate to={"/login"} />}</>;
};

export default TestRoutes;
