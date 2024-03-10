import { Navigate } from "react-router-dom";

const TestComponent = () => {
  const loggedIn = false;
  return <>{loggedIn ? <h1>Home</h1> : <Navigate to={"/login"} />}</>;
};

export default TestComponent;
