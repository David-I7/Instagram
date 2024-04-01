import { ReactNode } from "react";

interface DynamicSubmitButtonProps {
  content: string | ReactNode;
  tailwindStyles: string;
}

const DynamicSubmitButton = ({
  content,
  tailwindStyles,
}: DynamicSubmitButtonProps) => {
  return (
    <button type="submit" className={tailwindStyles}>
      {content}
    </button>
  );
};

export default DynamicSubmitButton;
