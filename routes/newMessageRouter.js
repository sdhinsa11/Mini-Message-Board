import { Router } from "express";
import { showForm, addMsg } from "../controllers/newMsgController.js"

const newMsgRouter = Router();

newMsgRouter.get("/",  showForm); // this cannot be "/new" it will be "/" in this router because the parent path is already "/new"
newMsgRouter.post("/", addMsg); // add the data to the messages 

export default newMsgRouter;