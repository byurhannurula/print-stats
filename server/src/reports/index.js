const { analytics } = require('./auth');

async function getData() {
  const res = await analytics.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: process.env.VIEW_ID,
          dateRanges: [
            {
              startDate: '14daysAgo',
              endDate: 'today',
            },
          ],
          metrics: [
            {
              expression: 'ga:sessions',
            },
          ],
          dimensions: [
            {
              name: 'ga:country',
            },
          ],
          pivots: [
            {
              dimensions: [
                {
                  name: 'ga:browser',
                },
              ],
              maxGroupCount: 3,
              startGroup: 3,
              metrics: [
                {
                  expression: 'ga:sessions',
                },
              ],
            },
          ],
        },
      ],
    },
  });
  console.log(res.data.reports[0].data.rows);
  return res.data;
}

module.exports = { getData };
