import { useEffect, useState } from "react";
// import { validateSecondaryUsername } from "../../../validation/authValidation";
import { validateUsername } from "../../../services/authApi";

const useValidateSecondaryUsername = (secondaryUsername: string) => {
  const [validSecondaryUsername, setValidSecondaryUsername] = useState<
    boolean | undefined
  >(undefined);
  const [secondaryUsernameType, setSecondaryUsernameType] =
    useState<string>("");
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (!secondaryUsername) return;

      const data = await validateUsername(
        "secondaryUsername",
        secondaryUsername
      );
      setValidSecondaryUsername(data.isValid);
      if (data.isValid) {
        setSecondaryUsernameType(data.usernameType);
        return;
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [secondaryUsername]);
  return { validSecondaryUsername, secondaryUsernameType };
};

export default useValidateSecondaryUsername;
