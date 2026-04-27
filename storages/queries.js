const pool = require("./db"); // change to ESLint

// finds the message using the id
async function getMsgById(msgId){
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [msgId]);
    return rows;
}

// exporting all the messages 
async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages")
}

export {getMsgById, getAllMessages};