import DynamicTextInput from "./DynamicTextInput";
import { getTailwindStyles } from "../helpers/Styles";
import DynamicSubmitButton from "./DynamicSubmitButton";
import { useState } from "react";

const ResetPasswordForm = () => {
  const [textInput, setTextInput] = useState<string>("");
  return (
    <form className="w-4/5">
      <DynamicTextInput
        name="username"
        placeholder="Email, Phone or Username"
        textInput={textInput}
        setTextInput={setTextInput}
      />
      <DynamicSubmitButton
        content="Send login link"
        tailwindStyles={getTailwindStyles(textInput.length > 0)}
      />
    </form>
  );
};

export default ResetPasswordForm;
