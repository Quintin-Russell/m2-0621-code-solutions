const express = require('express');
const newApp = express();

// using .listen() to log that port 3000 is in use
newApp.listen(3000, () => {
  //eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
