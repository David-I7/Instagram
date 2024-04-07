export type JSONError = {
  status: "error";
  message: string;
  data?: { [key: string]: any; code?: number };
};

export const jsonError = <Exception extends Error>(
  error: Exception,
  data?: { [key: string]: any; code?: number }
): JSONError => {
  return {
    status: "error",
    message: error.message,
    data,
  };
};

export type JSONSuccess = {
  status: "success";
  data: { [key: string]: any } | null;
};

export const jsonSuccess = (
  data: { [key: string]: any } | null = null
): JSONSuccess => {
  return {
    status: "success",
    data,
  };
};

export type JSONFail = {
  status: "fail";
  data: { [key: string]: any };
};

export const jsonFail = (data: { [key: string]: any }): JSONFail => {
  return {
    status: "fail",
    data,
  };
};
