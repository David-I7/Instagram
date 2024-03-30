import { createContext } from "react";

const CredentialsContext = createContext("hello");

export const CredentialsProvider = ({ children }: any) => {
  return (
    <CredentialsContext.Provider value={"1"}>
      {children}
    </CredentialsContext.Provider>
  );
};
