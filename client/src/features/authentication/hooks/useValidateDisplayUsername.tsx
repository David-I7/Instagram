import { useEffect, useState } from "react";
import { validateUsername } from "../../../services/authApi";

const useValidateDisplayUsername = (displayUsername: string) => {
  const [validUsername, setValidUsername] = useState<boolean | undefined>(
    undefined
  );
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (!displayUsername) return;

      const data = await validateUsername("username", displayUsername);

      setValidUsername(data.isValid);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [displayUsername]);
  return validUsername;
};

export default useValidateDisplayUsername;
