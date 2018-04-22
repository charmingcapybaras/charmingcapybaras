const nodemailer = require ('nodemailer');
//const archive = require('../../helpers/email-helper');
var axios = require('axios');
// const config = require('../../config/config');
var cron = require('cron');
var CronJob = require('cron').CronJob;

new CronJob(
  '*/1 * * * ',
  function() {
    console.log('cronjob running');
    getEmailAddresses();
  },
  null,
  true,
  'America/Los_Angeles'
);

//let result = archive.getEmails();

var getEmailAddresses = () => {

  axios.get('http://localhost:3000/api/user')
  .then (response => {
    console.log('Retrieved emails');
    //return response.data[1].emailaddress;
    let users = response.data;
    users.forEach( account => sendEmails(account.emailaddress) );
  })
  .catch(err => {
    console.log(err);
  })
}

let sendEmails = (email) => {

  let transporter = nodemailer.createTransport(
    {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'rpt05capybaras@gmail.com',
        pass: 'hackreactor'
      }
    },
    {
      from: 'Capybaras <no-reply@capybaras.com>'
    }
  );

  let message = {
    to: `<${email}>`,
    subject: 'Friday Hero Notification',
    text: 'You have a new notification!'
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log('Error Occurred: ', error.message);
      return process.exit(1);
    }

    console.log('Message sent');
    console.log(nodemailer.getTestMessageUrl(info));
  })
}

// getEmailAddresses();