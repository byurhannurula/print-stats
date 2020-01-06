require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const express = require('express');
const cors = require('cors');

const { getData } = require('./reports');

const app = express();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/api', async (req, res) => {
  const { metric } = req.query;
  const metrics = metric.split(', ');

  Promise.all(getData(metrics))
    .then(data => {
      res.send({ data });
      console.log('Done');
    })
    .catch(err => {
      console.log(`Error: ${err}`);
      res.send({ status: 'Error getting a metric', message: `${err}` });
      console.log('Done');
    });
});

app.listen(port, () => {
  console.log(
    `🚀  Server is running on http://localhost:${port}/ in ${env} mode.`,
  );
});
