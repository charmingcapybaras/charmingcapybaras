const nodemailer = require ('nodemailer');
const archive = require('../../helpers/email-helper');
// const config = require('../../config/config');
//console.log('HEEeEEy', JSON.stringif);
// var cron = require('cron');

// var CronJob = require('cron').CronJob;

// new CronJob(
//   '*/1 * * * ',
//   function() {
//     console.log('cronjob running');
//     //let emails = archive.getEmails();
       //emails.forEach(user => sendEmails(user))
//   },
//   null,
//   true,
//   'America/Los_Angeles'
// );

// let sendEmails = (email) => {

  // let transporter = nodemailer.createTransport(
  //   {
  //     host: 'smtp.gmail.com',
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: 'rpt05capybaras@gmail.com',
  //       pass: 'hackreactor'
  //     }
  //   },
  //   {
  //     from: 'Capybaras <no-reply@capybaras.com>'
  //   }
  // );

//   let message = {
//     to: `<${email}>`,
//     subject: 'Friday Hero Notification',
//     text: 'You have a new notification!'
//   };

//   transporter.sendMail(message, (error, info) => {
//     if (error) {
//       console.log('Error Occurred: ', error.message);
//       return process.exit(1);
//     }

//     console.log('Message sent');
//     console.log(nodemailer.getTestMessageUrl(info));
//   })
// }

archive.getEmails();

//sendEmails('kjakpan@gmail.com')