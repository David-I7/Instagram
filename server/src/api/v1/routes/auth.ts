import express from "express";

const authRouter = express.Router();

authRouter.route("/").get((req, res) => {
  console.log(req.body);
});

export default authRouter;
