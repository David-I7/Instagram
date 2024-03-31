import { useEffect, useState } from "react";
import { validateSecondaryUsername } from "../../../validation/authValidation";

const useValidateSecondaryUsername = (secondaryUsername: string) => {
  const [validSecondaryUsername, setValidSecondaryUsername] = useState<
    boolean | undefined
  >(undefined);
  const [secondaryUsernameType, setSecondaryUsernameType] =
    useState<string>("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const type = validateSecondaryUsername(secondaryUsername);
      setSecondaryUsernameType(type);
      setValidSecondaryUsername(Boolean(type));
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [secondaryUsername]);
  return { validSecondaryUsername, secondaryUsernameType };
};

export default useValidateSecondaryUsername;
