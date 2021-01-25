// IMPORT EXPRESS
const express = require('express');
// CREATE A NEW INSTANCE OF EXPRESS
const app = express();
// SET THE DEFAULT PORT NUMBER THE WEB SERVER WILL LISTEN IN ON
const PORT = 3000;
// ACTIVATE THE SERVER TO LISTEN ON THE PORT
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
