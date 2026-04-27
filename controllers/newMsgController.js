import { addMessage } from "../storages/db.js";

import { v4 as uuidv4 } from 'uuid';  // https://stackoverflow.com/questions/79758051/how-to-use-uuid-with-node-js-v20-when-require-throws-err-require-esm

async function showForm(req, res){
    
    res.render("form");
}

async function addMsg(req, res) {
	// var msgs = getAllMessages();
	
	var users_name = req.body.users_name;
	var desc = req.body.desc

	await addMessage(users_name, desc); // query from the database
	
	// add the new message to this list - this should go in the db.js file
	// msgs.push({id: uuidv4(), text: desc, user:users_name, added: new Date() });
	
	// redirect to the index page  - https://stackoverflow.com/questions/42034898/redirect-from-one-route-to-another-in-express
	res.redirect("/"); // can be just like this doesn't need to be ../

}

export {showForm, addMsg};