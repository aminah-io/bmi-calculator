const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  res.send(`Thank you for stopping by. I'm excited that you're here, but your result isn't ready yet.`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})