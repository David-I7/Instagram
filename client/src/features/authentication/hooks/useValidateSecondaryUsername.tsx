import { useEffect, useState } from "react";
import { validateSecondaryUsername } from "../../../validation/authValidation";

const useValidateSecondaryUsername = (secondaryUsername: string) => {
  const [validUsername, setValidUsername] = useState<boolean>(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValidUsername(validateSecondaryUsername(secondaryUsername));
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [secondaryUsername]);
  return validUsername;
};

export default useValidateSecondaryUsername;
