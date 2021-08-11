const express = require('express');
const app = express();

app.use((req, res) => {
  console.log(`req.method: ${req.method}`);
  res.send('Full send');
});


app.listen(3000, () => console.log('Server is listening!'));
