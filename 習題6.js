import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("blog.db");
db.query(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    time DATETIME DEFAULT CURRENT_TIMESTAMP,
    title TEXT,
    body TEXT,
    posted_by TEXT,
    tags TEXT,
    comments TEXT,
    likes INTEGER DEFAULT 0
    )
`);

const posts = [
    {title:'Offer a reward', body:'Sirius Black', posted_by:'Azkaban', tags:'#The Ministry of Magic', comments:'Oh my god', likes:6},
    {title:'Alert', body:'Lord Voldmrt is back', posted_by:'Albus Dumbledore', tags:'#Order f Phoenix', comments:'Kill all the Death Eater', likes:66},
    {title:'Hogwarts', body:'Ten point of Gryffindor', posted_by:'Severus Snape', tags:'#Potter', comments:'You cannot do it', likes:666},
];

// Run a simple query
for (const post of posts)
  db.query("INSERT INTO posts (title, body, posted_by, tags, comments, likes) VALUES (?,?,?,?,?,?)", [post.title, post.body, post.posted_by, post.tags, post.comments, post.likes]);

// Print out data in table
for (const [id, time, title, body, posted_by, tags, comments, likes] of db.query("SELECT id, time, title, body,posted_by, tags, comments, likes FROM posts"))
  console.log(id, time, title, body, posted_by, tags, comments, likes);

// Close connection
db.close();
