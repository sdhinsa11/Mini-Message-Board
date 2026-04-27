import { Pool } from "pg";
import dotenv from 'dotenv'

dotenv.config();

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
const pool = new Pool({
  host: process.env.HOST, // or wherever the db is hosted // was "localhost"
  user: process.env.ROLE_NAME,                              // was "sohanadhinsa"
  database: process.env.DB,                             // was "messages"
  password: process.env.ROLE_PW,                               // was "1234567"
  port: process.env.DB_PORT // The default port                     // was 5432
});

export default pool;

// -------- ALTERNATIVE was from URI connection to DB --------
// Again, this should be read from an environment variable
// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });