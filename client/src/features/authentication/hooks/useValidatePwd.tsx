import { useEffect, useState } from "react";
import { validatePwd } from "../../../validation/authValidation";

const useValidatePwd = (pwdInput: string) => {
  const [validPwd, setValidPwd] = useState<boolean>(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValidPwd(validatePwd(pwdInput));
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pwdInput]);
  return validPwd;
};

export default useValidatePwd;
