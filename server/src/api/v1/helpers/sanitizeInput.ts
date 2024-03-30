export const whiteListInput = (input: string): string => {
  // Whitelist alphanumeric characters and space
  input = input.replace(/[^a-zA-Z0-9 ]/g, "");
  return input;
};

export const encodeToHtml = (input: string): string => {
  // HTML encoding
  input = input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  return input;
};
