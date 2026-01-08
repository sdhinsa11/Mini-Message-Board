import { Router } from "express";
import { displayAllMessages, displayMessage } from "../controllers/indexController.js";

const indexRouter = Router();

// These are the different routes we use for the "/" parent
indexRouter.get("/", displayAllMessages); // This is the default one
indexRouter.get("/:id", displayMessage); // when we click on a specifc message

export default indexRouter;