const fs = require('fs/promises');
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  const file = await fs.readFile('./index.html');
  res.set('content-type', 'text/html');
  res.send(file);
});

app.get('/about', async (req, res) => {
  const file = await fs.readFile('./about.html');
  res.set('content-type', 'text/html');
  res.send(file);
});

app.get('/contact-me', async (req, res) => {
  const file = await fs.readFile('./contact-me.html');
  res.set('content-type', 'text/html');
  res.send(file);
});

app.use(async (req, res) => {
  const file = await fs.readFile('./404.html');
  res.set('content-type', 'text/html');
  res.send(file);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('sever is running on port: ' + PORT);
});
