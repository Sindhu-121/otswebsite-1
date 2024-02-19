const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
const path = require("path")
// Middleware to parse JSON
app.use(bodyParser.json());

// Enable CORS
app.use(cors());
  
app.post('/api/submitForm', (req, res) => {
  const { name, phoneNumber } = req.body;
  console.log('Received Form Data:', { name, phoneNumber });
  res.json({ message: 'Form submitted successfully!' });
});



app.use(express.static("./client/build"));
app.get("*",(req,res) => {
  res.sendFile(path.resolve(__dirname,"client","build","index.html"))
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
