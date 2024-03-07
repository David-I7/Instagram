import express from "express";

const authRouter = express.Router();

authRouter.route("/").post((req, res) => {
  const { username, pwd } = req.body;
  if (!username || !pwd) return res.sendStatus(400);
  // validate input

  return res.sendStatus(200);
});

export default authRouter;
