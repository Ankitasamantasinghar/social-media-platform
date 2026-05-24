const express = require('express');
const cors = require('cors');
const path = require('path');
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

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running on ${PORT}`));