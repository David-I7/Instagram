import express from "express";

const registerRouter = express.Router();

registerRouter.route("/").get((req, res) => {
  console.log(req.body);
});

export default registerRouter;
