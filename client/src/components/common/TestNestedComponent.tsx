import TestComponent from "./TestComponent";

interface TestNestedComponentsProps {
  func(): void;
}

const TestNestedComponent = ({ func }: TestNestedComponentsProps) => {
  func();
  return <div>TestNestedComponent</div>;
};

export default TestNestedComponent;
