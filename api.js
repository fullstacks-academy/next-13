const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Hamid" },
];

app.use(async (req, res, next) => {
  const time = Math.random() * 5000;
  setTimeout(() => next(), time);
});

app.get("/users", function (req, res) {
  console.log("Getting All Users");
  res.json(users);
});

app.get("/users/:id", function (req, res) {
  const id = req.params.id;
  console.log(`Getting User ${id}`);
  if (users[id]) return res.json(users[id]);
  return res.status(404).send("Not Found");
});

const posts = [
  {
    title: "Exploring the Wilderness",
    description:
      "Join us on an adventure through the untamed forests and majestic mountains.",
    author: users[0].name,
    image: "https://example.com/images/post1.jpg",
  },
  {
    title: "Unveiling the Secrets of the Universe",
    description:
      "Explore the mysteries of space and delve into the wonders of astrophysics.",
    author: users[1].name,
    image: "https://example.com/images/post3.jpg",
  },
  {
    title: "The Power of Meditation",
    description:
      "Discover the transformative benefits of meditation for a calm and balanced life.",
    author: users[2].name,
    image: "https://example.com/images/post5.jpg",
  },
];

app.get("/posts", function (req, res) {
  console.log("Getting All Posts");
  res.json(posts);
});

app.get("/posts/:id", function (req, res) {
  const id = req.params.id;
  console.log(`Getting Post ${id}`);
  if (posts[id]) return res.json(posts[id]);
  return res.status(404).send("Not Found");
});

app.listen(3001, () => {
  console.log("API is listening on port 3001");
});
