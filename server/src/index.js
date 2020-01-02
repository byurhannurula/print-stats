require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const express = require('express');
const cors = require('cors');

const app = express();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 4000;

app.use(cors());

app.listen(port, () => {
  console.log(
    `🚀  Server is running on http://localhost:${port}/ in ${env} mode.`,
  );
});
