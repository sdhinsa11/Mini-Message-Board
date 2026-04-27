// db.js - this would essentially be the model

// any functions that relate to interacting with the database put them here 
const messages = [
  {
    id: "123",
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: "4567",
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// finds the message using the id
async function getMsgById(msgId){
    return messages.find(msg => msg.id === String(msgId)); // type matching 
}

// exporting all the messages 
function getAllMessages() {
	return messages;
}

export {getMsgById, getAllMessages};