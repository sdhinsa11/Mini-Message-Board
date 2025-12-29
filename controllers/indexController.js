import { getAllMessages } from "../db.js";

async function displayAllMessages(req, res){
    const msgs = getAllMessages();

    res.render("index", {messages: msgs});

}

// https://stackoverflow.com/questions/76191154/the-requested-module-does-not-provide-an-export-named-default
export {displayAllMessages}; // - need to fix this cuz before it was export default but that wasn't working 