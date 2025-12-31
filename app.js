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

app.use(express.urlencoded({ extended: true})); // needs to come before everything because this is how we parse it


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setting up styling:

// https://www.geeksforgeeks.org/node-js/how-to-serve-static-content-using-node-js/
// https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express
//  This is a middleware function that uses static assets and it will look for asses in the public directory root so that's why you don't need to include public in the style sheet
//      - automatirclally makes all files inside a specified folder accessibile via HTTP 
//      - don't need custome routes for eeahc file
//      - don't need the "/"
app.use(express.static(path.join(__dirname, 'public'))) // the directory (path of the folder)

// Where the routes are defined - order matters
app.use("/new", newMsgRouter);
app.use("/", indexRouter);


// added stuff to package.json and to use the watch flag and changed the main to app.js and not index.js
// using this: https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/meet-the-node-console

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error){
        throw error;
    }

    console.log(`My Express app - listening on port ${PORT}!`)
})