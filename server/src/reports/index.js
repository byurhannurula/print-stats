/* eslint-disable no-nested-ternary */
const { analytics } = require('./auth');
const queries = require('./queries');

async function getMetric(metric) {
  const q =
    metric && metric === 'os'
      ? queries.osQuery
      : metric === 'users'
      ? queries.usersQuery
      : metric === 'browser'
      ? queries.browsersQuery
      : metric === 'pageViews'
      ? queries.pageViewsQuery
      : metric === 'language'
      ? queries.languageQuery
      : metric === 'country'
      ? queries.countryQuery
      : '';

  await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](
    Math.trunc(1000 * Math.random()),
  ); // 3 sec

  const { data } = await analytics.reports.batchGet({
    requestBody: {
      reportRequests: [q],
    },
  });

  const {
    columnHeader,
    data: { rows },
  } = data.reports[0];

  const res = {};
  res[metric] = {
    header: columnHeader.metricHeader.metricHeaderEntries[0].name,
    value: rows[0].dimensions ? rows[0].dimensions : rows[0].metrics,
  };

  return res;
}

function getData(metrics = ['users']) {
  const results = [];
  for (let i = 0; i < metrics.length; i += 1) {
    results.push(getMetric(metrics[i]));
  }
  return results;
}

module.exports = { getMetric, getData };
