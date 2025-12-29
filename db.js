// db.js 
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

async function getMsgById(msgId){
    return messages.find(msg => msg.id === String(msgId)); // type matching 
}

// exporting the messages 
function getAllMessages() {
	return messages;
}

export {getMsgById, getAllMessages};