const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  let weight = req.body.weight;
  let height = req.body.height;

  let result = Math.floor((weight * 703) / (height**2));
  res.send(`<h1 style="color: #B20600; text-align: center;">Your BMI is ${result}. Congratulations!</h1>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})