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
  e: FormEvent,
  userCredential: RegisterUser
) => {
  e.preventDefault();
  console.log("handling form");
  const requestObject: RequestInit = {
    method: " POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userCredential),
    credentials: "include",
  };

  registerUser(requestObject);
};
