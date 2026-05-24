const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API route for your Task-05 data
app.get('/api/task', (req, res) => {
  res.json({
    title: "Task-05",
    name: "Social Media Platform",
    description: "Build a social media application where users can create profiles, share posts, like, and comment on others' posts.",
    features: ["Image/Video uploads", "Post tagging", "Follow users", "Notifications", "Trending content"]
  });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));