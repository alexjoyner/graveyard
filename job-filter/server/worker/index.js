const { CronJob } = require('cron');
const fetchGithub = require('./tasks/fetch-github');

// eslint-disable-next-line no-new
new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');
