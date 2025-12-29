import { getAllMessages, getMsgById } from "../db.js";

async function displayAllMessages(req, res){
    const msgs = getAllMessages();

    res.render("index", {messages: msgs});

}


//https://stackoverflow.com/questions/30516497/how-do-we-add-url-parameters-ejs-node-express
async function displayMessage(req, res){
    const {id} = req.params; // this is destructing it 
    const msg = await getMsgById(id);

    if (!msg) {
		res.status(404).send("Msg not found");
		return; 
	}

    res.render("singleMessage", {item: msg});

}

// https://stackoverflow.com/questions/76191154/the-requested-module-does-not-provide-an-export-named-default
export {displayAllMessages, displayMessage}; // - need to fix this cuz before it was export default but that wasn't working 