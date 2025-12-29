import { Router } from "express";

const newMsgRouter = Router();

newMsgRouter.get("/",  (req, res) => res.send("New Message")); // this cannot be "/new" it will be "/" in this router because the parent path is already "/new"

export default newMsgRouter;