const osQuery = {
  viewId: process.env.VIEW_ID,
  dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
  metrics: [{ expression: `ga:sessions`, alias: 'OS' }],
  dimensions: [{ name: `ga:operatingsystem` }],
  orderBys: [
    {
      fieldName: `ga:sessions`,
      sortOrder: 'DESCENDING',
    },
  ],
};

const usersQuery = {
  viewId: process.env.VIEW_ID,
  dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
  metrics: [{ expression: `ga:users`, alias: 'Total Users' }],
};

const browsersQuery = {
  viewId: process.env.VIEW_ID,
  dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
  metrics: [{ expression: `ga:sessions`, alias: 'Browser' }],
  dimensions: [{ name: `ga:browser` }],
  orderBys: [
    {
      fieldName: `ga:sessions`,
      sortOrder: 'DESCENDING',
    },
  ],
};

const pageViewsQuery = {
  viewId: process.env.VIEW_ID,
  dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
  metrics: [{ expression: `ga:pageviews`, alias: 'Page Views' }],
};

const languageQuery = {
  viewId: process.env.VIEW_ID,
  dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
  metrics: [{ expression: `ga:users`, alias: 'Language' }],
  dimensions: [{ name: `ga:language` }],
  orderBys: [
    {
      fieldName: `ga:users`,
      sortOrder: 'DESCENDING',
    },
  ],
};

const countryQuery = {
  viewId: process.env.VIEW_ID,
  dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
  metrics: [{ expression: `ga:users`, alias: 'Country' }],
  dimensions: [{ name: `ga:country` }],
  orderBys: [
    {
      fieldName: `ga:country`,
      sortOrder: 'DESCENDING',
    },
  ],
};

module.exports = {
  osQuery,
  usersQuery,
  browsersQuery,
  pageViewsQuery,
  languageQuery,
  countryQuery,
};
