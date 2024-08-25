// const express = require('express');
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('This is a message from the backend server.');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, title: 'Joke 1', joke: 'Why don’t scientists trust atoms? Because they make up everything!' },
    { id: 2, title: 'Joke 2', joke: 'Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them!' },
    { id: 3, title: 'Joke 3', joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!' },
    { id: 4, title: 'Joke 4', joke: 'How do you organize a space party? You planet!' },
    { id: 5, title: 'Joke 5', joke: 'Why don’t skeletons fight each other? They don’t have the guts!' }
  ];

  res.json(jokes);

  res.end();
});



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});