import DynamicPasswordInput from "./DynamicPasswordInput";
import DynamicSubmitButton from "./DynamicSubmitButton";
import DynamicTextInput from "./DynamicTextInput";
import { useState } from "react";
import { getTailwindStyles } from "../helpers/Styles";

const LoginForm = () => {
  const [pwdInput, setPwdInput] = useState<string>("");
  const [textInput, setTextInput] = useState<string>("");

  return (
    <form
      className="flex flex-col w-full justify-center items-center mb-6"
      action="http://localhost:3000/auth"
      method="post"
    >
      <DynamicTextInput
        name="username"
        placeholder="Phone number, username or email"
        textInput={textInput}
        setTextInput={setTextInput}
      />
      <DynamicPasswordInput pwdInput={pwdInput} setPwdInput={setPwdInput} />

      <DynamicSubmitButton
        content="Log in"
        tailwindStyles={getTailwindStyles(
          pwdInput.length >= 8 && textInput.length > 0
        )}
      />
    </form>
  );
};

export default LoginForm;
