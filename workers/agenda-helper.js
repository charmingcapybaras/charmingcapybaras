var archive = require('../helpers/utils');
var cron = require('cron');

var CronJob = require('cron').CronJob;

new CronJob(
  '*/1 * * * *',
  function() {
    console.log('cronjob running');
    archive.getUserAgenda();
  },
  null,
  true,
  'America/Los_Angeles'
);

// worker reads urls in the list
// worker download files
