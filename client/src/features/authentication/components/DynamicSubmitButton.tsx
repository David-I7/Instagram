import { ReactNode } from "react";

interface DynamicSubmitButtonProps {
  content: string | ReactNode;
  tailwindStyles: string;
  onClick?: () => void;
}

const DynamicSubmitButton = ({
  content,
  tailwindStyles,
  onClick,
}: DynamicSubmitButtonProps) => {
  return (
    <button onClick={onClick} className={tailwindStyles}>
      {content}
    </button>
  );
};

export default DynamicSubmitButton;
