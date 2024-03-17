import { useEffect, useState } from "react";
import { validateDisplayUsername } from "../../../validation/authValidation";

const useValidateDisplayUsername = (displayUsername: string) => {
  const [validUsername, setValidUsername] = useState<boolean>(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValidUsername(validateDisplayUsername(displayUsername));
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [displayUsername]);
  return validUsername;
};

export default useValidateDisplayUsername;
