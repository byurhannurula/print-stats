const { google } = require('googleapis');

const clientEmail = process.env.CLIENT_EMAIL;
const privateKey = process.env.PRIVATE_KEY.replace(new RegExp('\\\\n'), '\n');

const scopes = ['https://www.googleapis.com/auth/analytics.readonly'];

const auth = new google.auth.JWT({
  email: clientEmail,
  key: privateKey,
  scopes,
});

const analytics = google.analyticsreporting({
  version: 'v4',
  auth,
});

module.exports = { analytics };
