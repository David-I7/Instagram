import { FormEvent } from "react";
import { registerUser } from "./authApi";

type RegisterUser = {
  displayUsername: string;
  secondaryUsername: string;
  pwd: string;
  birthday: Date;
  fullName?: string;
};

export const handleRegisterForm = (
  e: FormEvent<HTMLFormElement>,
  userCredentials: RegisterUser
) => {
  e.preventDefault();
  console.log(userCredentials);
  const requestObject: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userCredentials),
    credentials: "include",
  };

  registerUser(requestObject);
};
