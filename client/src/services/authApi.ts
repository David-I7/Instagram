import { REGISTER } from "../constants/urls";

export const registerUser = async (
  requestInit: RequestInit,
  URL = REGISTER
) => {
  const response = await fetch(URL, requestInit);
  console.log(await response.json());
};
