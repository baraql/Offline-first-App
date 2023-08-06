const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();

const db = new sqlite3.Database("chat.db", (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
  }
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/chats", async (req, res) => {
  db.all("select chat_identifier, display_name from chat", (err, rows) => {
    if (err) return err;
    res.status(200).json({
      rows,
    });
  });
});

app.listen(8000, () => console.log("Server is running on Port 8000"));
