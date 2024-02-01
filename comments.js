// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a new comment
app.post('/comments', (req, res) => {
  const { body } = req;
  // Add a new comment
  comments.push(body);
  // Send the new comment back
  res.json(body);
});

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Path: index.js
// Create a new comment
const newComment = {
  body: 'This is a new comment',
  postId: 1
};

fetch('http://localhost:3000/comments', {
  method: 'POST',
  body: JSON.stringify(newComment),
  headers: { 'Content-Type': 'application/json' }
})
  .then(res => res.json())
  .then(data => console.log(data));

// Get all comments
fetch('http://localhost:3000/comments')
  .then(res => res.json())
  .then(data => console.log(data));


// [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

// - The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
// - It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
