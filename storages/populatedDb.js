// import {Client} from "pg";

// const SQL = `
// CREATE TABLE messages (
//     id VARCHAR(50) PRIMARY KEY,
//     text TEXT NOT NULL,
//     "user" VARCHAR(100) NOT NULL,
//     added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
// );

// INSERT INTO messages (id, text, "user", added)
// VALUES 
//     ('123', 'Hi there!', 'Amando', NOW()),
//     ('4567', 'Hello World!', 'Charles', NOW());
// `;


// async function main() {
//   console.log("seeding...");
//   const client = new Client({
//     connectionString: "postgresql://sohanadhinsa:1234567@localhost:5432/messages",
//   });
//   await client.connect();
//   await client.query(SQL);
//   await client.end();
//   console.log("done");
// }

// main();

// // connect to db (top_users)
// // DROP TABLE usernames; 
// // run it: node db/populatedb.js or add as script in package.json (https://stackoverflow.com/questions/36433461/how-to-add-a-custom-script-to-package-json-that-runs-a-javascript-file/36433748#36433748)

import { Client } from "pg";
import "dotenv/config";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id VARCHAR(50) PRIMARY KEY,
    text TEXT NOT NULL,
    "user" VARCHAR(100) NOT NULL,
    added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (id, text, "user", added)
VALUES 
    ('123', 'Hi there!', 'Amando', NOW()),
    ('4567', 'Hello World!', 'Charles', NOW())
ON CONFLICT (id) DO NOTHING;
`;

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("done");
}

main();