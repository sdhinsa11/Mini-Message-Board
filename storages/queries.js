import pool from "./db.js";
const { v4: uuidv4 } = require("uuid");

// finds the message using the id
async function getMsgById(msgId){
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [msgId]);
    return rows;
}

// exporting all the messages 
async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages")
}

async function addMessage(name, desc){
    // insert into the database

    const id = uuidv4();
    const added = new Date();

    await pool.query(
        `INSERT INTO messages (id, text, "user", added)
                        VALUES ($1, $2, $3, $4)`,
                        [id, desc, name, added]
    );


}

export {getMsgById, getAllMessages, addMessage};