import express from "express";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const app = express();

// https://www.w3schools.com/nodejs/nodejs_modules_esm.asp - setting up module instead of commonjs in package.json
// https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

import indexRouter from "./routes/indexRouter.js";
import newMsgRouter from "./routes/newMessageRouter.js";

// setting up the views:

// https://www.geeksforgeeks.org/node-js/how-to-fix-referenceerror-dirname-is-not-defined-in-es-module-scope-in-javascript/
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//---
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Where the routes are defined 
app.use("/", indexRouter);
app.use("/new", newMsgRouter);

app.use(express.urlencoded({ extended: true}));

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error){
        throw error;
    }

    console.log(`My Express app - listening on port ${PORT}!`)
})