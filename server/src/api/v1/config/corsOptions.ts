import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
];

const corsOptions = cors({
  origin(requestOrigin, callback) {
    if (allowedOrigins.includes(requestOrigin!) || requestOrigin === undefined)
      callback(null, true);
    else callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
});

export default corsOptions;
