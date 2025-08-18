// server/server.js
import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 5001;
const SECRET_KEY = "your_secret_key"; // keep this safe, use .env in production

// Middleware
app.use(cors());
app.use(express.json());

// Open SQLite database
let db;
(async () => {
  db = await open({
    filename: "./blog.db",
    driver: sqlite3.Database,
  });

  // Create tables if not exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      post_id INTEGER,
      author TEXT,
      text TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (post_id) REFERENCES posts(id)
    );
  `);
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        ALTER TABLE users ADD COLUMN is_admin BOOLEAN DEFAULT 0;
    );
    `);
  await db.exec(`
      CREATE TABLE IF NOT EXISTS izzy_profile(
      id INTEGER PRIMARY KEY,
        username TEXT,
        website_title TEXT,
        website_description TEXT
      );
  `);
})();

// Routes
app.get("/", (req, res) => {
  res.send("Travel Blog API is running 🚀");
});

// POST /api/signup
app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;

  // hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await db.run("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword]);
    res.json({ message: "User created!", id: result.lastID });
  } catch (err) {
    res.status(400).json({ error: "Username already exists" });
  }
});

// POST /api/login
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await db.get("SELECT * FROM users WHERE username = ?", [username]);

  if (!user) return res.status(400).json({ error: "Invalid username or password" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ error: "Invalid username or password" });

  // create JWT
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ message: "Logged in!", token });
});

// Get all posts
app.get("/api/posts", async (req, res) => {
  const posts = await db.all("SELECT * FROM posts ORDER BY created_at DESC");
  res.json(posts);
});

// Add a post
app.post("/api/posts", async (req, res) => {
  const { title, content } = req.body;
  const result = await db.run("INSERT INTO posts (title, content) VALUES (?, ?)", [title, content]);
  res.json({ id: result.lastID, title, content });
});

// Get comments for a post
app.get("/api/posts/:id/comments", async (req, res) => {
  const comments = await db.all("SELECT * FROM comments WHERE post_id = ?", [req.params.id]);
  res.json(comments);
});

// Add a comment
app.post("/api/posts/:id/comments", async (req, res) => {
  const { author, text } = req.body;
  const result = await db.run("INSERT INTO comments (post_id, author, text) VALUES (?, ?, ?)", [req.params.id, author, text]);
  res.json({ id: result.lastID, post_id: req.params.id, author, text });
});

// GET profile
app.get("/api/izzy_profile", async (req, res) => {
  const profile = await db.get("SELECT * FROM profile WHERE id = 1"); // only one profile
  res.json(profile || {});
});

// POST/PUT profile
app.post("/api/izzy_profile", async (req, res) => {
  const { username, website_title, website_description } = req.body;

  // Upsert: update if exists, else insert
  await db.run(
    `
    INSERT INTO profile (id, username, website_title, website_description)
    VALUES (1, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      username=excluded.username,
      website_title=excluded.website_title,
      website_description=excluded.website_description
  `,
    [username, website_title, website_description]
  );

  res.json({ message: "Profile saved" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
