import { Router } from "express";
import { displayAllMessages } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", displayAllMessages);

export default indexRouter;