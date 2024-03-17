import TestNestedComponent from "./TestNestedComponent";

const TestComponent = () => {
  const func = () => {
    console.log(func);
  };
  func();

  return <TestNestedComponent func={func} />;
};

export default TestComponent;
