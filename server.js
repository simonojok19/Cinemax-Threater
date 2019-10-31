const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist','cinemax-theater','index.html'));
});
app.listen(port, () => {
  console.log('Server runing on port: ', port);
});
