const express = require('express');

const app = express();

app.get('/api/v1/tours', (req, res) => {});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
