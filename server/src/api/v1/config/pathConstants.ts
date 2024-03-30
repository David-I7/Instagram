import path from "path";

//** Relative to pathConstants.js **

export const clientAssets = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "client",
  "dist"
);

export const clientIndex = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "client",
  "dist",
  "index.html"
);

export const dotenvFilepath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "..",
  ".env"
);
