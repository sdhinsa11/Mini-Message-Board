import { getAllMessages } from "../db.js";

import { v4 as uuidv4 } from 'uuid';  // https://stackoverflow.com/questions/79758051/how-to-use-uuid-with-node-js-v20-when-require-throws-err-require-esm

async function showForm(req, res){

    var msgs = getAllMessages(); // grab all messages
    
    res.render("form", {messages: msgs})
}

async function addMsg(req, res) {
	var msgs = getAllMessages();
	
	var users_name = req.body.users_name;
	var desc = req.body.desc
	
	// add the new message to this list 
	msgs.push({id: uuidv4(), text: desc, user:users_name, added: new Date() });
	
	// redirect to the index page  - https://stackoverflow.com/questions/42034898/redirect-from-one-route-to-another-in-express
	res.redirect("/"); // can be just like this doesn't need to be ../

}

export {showForm, addMsg};