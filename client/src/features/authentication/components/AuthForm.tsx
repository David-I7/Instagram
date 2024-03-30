import DynamicPasswordInput from "./DynamicPasswordInput";
import DynamicSubmitButton from "./DynamicSubmitButton";
import DynamicTextInput from "./DynamicTextInput";
import { FormEvent, useState } from "react";
import { getTailwindStyles } from "../helpers/Styles";
import useValidatePwd from "../hooks/useValidatePwd";
import useValidateDisplayUsername from "../hooks/useValidateDisplayUsername";
import useValidateSecondaryUsername from "../hooks/useValidateSecondaryUsername";
import { validateFullName } from "../../../validation/authValidation";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [pwdInput, setPwdInput] = useState<string>("");
  const validPwd = useValidatePwd(pwdInput);
  const [fullName, setFullName] = useState<string>("");
  const [validFullName, setValidFullname] = useState<boolean>(false);
  const [displayUsername, setDisplayUsername] = useState<string>("");
  const validDisplayUsername = useValidateDisplayUsername(displayUsername);
  const [secondaryUsername, setSecondaryUsername] = useState<string>("");
  const validSecondaryUsername =
    useValidateSecondaryUsername(secondaryUsername);
  const handleBlur = () => {
    setValidFullname(validateFullName(fullName));
  };
  const navigate = useNavigate();

  return (
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
      <DynamicTextInput
        name="secondaryUsername"
        placeholder="Phone Number or Email"
        textInput={secondaryUsername}
        setTextInput={setSecondaryUsername}
        validInput={validSecondaryUsername}
      />
      <DynamicTextInput
        name="fullName"
        placeholder="Full name"
        textInput={fullName}
        setTextInput={setFullName}
        validInput={validFullName}
        onBlur={handleBlur}
      />
      <DynamicTextInput
        name="displayUsername"
        placeholder="Username"
        textInput={displayUsername}
        setTextInput={setDisplayUsername}
        validInput={validDisplayUsername}
      />

      <DynamicPasswordInput
        pwdInput={pwdInput}
        setPwdInput={setPwdInput}
        validPwd={validPwd}
      />
      <p className="text-xs mb-4 mt-4 text-center">
        People who use our service may have uploaded your contact information to
        Instagram.{" "}
        <a
          className="text-blue-900"
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://www.facebook.com/help/instagram/261704639352628"
        >
          Learn more
        </a>
      </p>
      <p className="text-xs mb-4 text-center">
        By signing up, you agree to our{" "}
        <a
          className="text-blue-900"
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://help.instagram.com/581066165581870/?locale=en_US"
        >
          Terms
        </a>
        . Learn how we collect, use and share your data in our{" "}
        <a
          className="text-blue-900"
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://www.facebook.com/privacy/policy"
        >
          Privacy Policy
        </a>{" "}
        and how we use cookies and similar technology in our{" "}
        <a
          className="text-blue-900"
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://www.instagram.com/legal/cookies/"
        >
          Cookies Policy
        </a>
        .
      </p>
      <DynamicSubmitButton
        content={"Next"}
        tailwindStyles={getTailwindStyles(
          validDisplayUsername &&
            validSecondaryUsername &&
            validPwd &&
            (fullName.length > 0 ? validFullName : true)
        )}
        onClick={() =>
          navigate("/birthday", {
            state: { displayUsername, secondaryUsername, fullName, pwdInput },
          })
        }
      />
    </form>
  );
};

export default AuthForm;
