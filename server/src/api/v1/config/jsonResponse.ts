import { AuthError } from "../config/errorObjects";

type JsonError = {
  success: boolean;
  status: number;
  error: {
    message: string;
    details: string;
  };
  data: {};
};

export const getJsonError = (error: AuthError): JsonError => {
  return {
    success: false,
    status: error.status,
    error: {
      message: error.message,
      details: error.data.details,
    },
    data: {},
  };
};

type JsonSuccess = {
  sucess: true;
  status: number;
  data: { [key: string]: any };
};

export const getJsonSuccess = (
  status: number,
  data: { [key: string]: any }
): JsonSuccess => {
  return {
    sucess: true,
    status,
    data,
  };
};
