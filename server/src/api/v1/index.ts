import express from "express";
const app = express();
import path from "path";

const PORT = process.env.PORT || 3000;

app.use(
  express.static(
    path.join(__dirname, "..", "..", "..", "..", "..", "client", "dist")
  )
);

app.get("/", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "..",
      "client",
      "dist",
      "index.html"
    )
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
