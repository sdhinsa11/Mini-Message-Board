import { Router } from "express";
import { displayAllMessages, displayMessage } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", displayAllMessages);
indexRouter.get("/:id", displayMessage);

export default indexRouter;