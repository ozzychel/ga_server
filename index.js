const express = require('express');
const app = express();
const port = 2700;
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log(">>REQ_QUERY:", req.query)
  console.log(">>REQ_BODY:", req.body)
  res.status(200).send('GET Request received!')
})

app.post('/', (req, res) => {
  console.log(">>REQ_QUERY:", req.query)
  console.log(">>REQ_BODY:", req.body)
  res.status(200).send('POST Request received!')
})

app.listen(port, () => {
  console.log(`Server is listenning listening on port ${port}`)
})