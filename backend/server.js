const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log('Form Data:', formData);
  res.send('Form data received');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
