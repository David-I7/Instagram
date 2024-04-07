import { Router } from "express";
import { jsonSuccess } from "../config/jsonResponse";

const testRouter = Router();

testRouter.route("/").get((req, res) => {
  return res
    .status(200)
    .json(
      jsonSuccess({
        random: {
          randomObject: { hello: "world" },
          randomArray: [1, "two", 333],
        },
      })
    );
});

export default testRouter;
