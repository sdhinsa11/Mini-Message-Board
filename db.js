// db.js 
const messages = [
  {
    id: 123,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 4567,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// exporting the messages 
export function getAllMessages() {
	return messages;
}
