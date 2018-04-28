# charmingcapybaras
> 

## Team

  - __Product Owner__: Kuyik Akpan
  - __Scrum Master__: Daren Lunsford
  - __Development Team Members__: Sam Norton, Kuyik Akpan, Daren Lunsford

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)    
1. Component Architecture
   1. [Authentication](https://github.com/charmingcapybaras/charmingcapybaras/wiki/User-Signup)
   1. [Agenda](https://github.com/charmingcapybaras/charmingcapybaras/wiki/User-Agenda)
   1. [Notifications](https://github.com/charmingcapybaras/charmingcapybaras/wiki/User-Notifications)
1. [Database Architecture](https://github.com/charmingcapybaras/charmingcapybaras/wiki/Database-Architecture)   
1. [Team](#team)



## Requirements

- Node 8.x
- Mongo
- Express
- React

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
Runs all tests suites with code coverage flag

```sh
npm run test
```
Spins up the dev server
```sh
npm run server-dev
```
Starts webpack in watch mode to keep track of changed files
```sh
npm run react-dev
```

### Required environment variables
via .env file are
- MAIL_USER (your mail server login)
- MAIL_PWD (your mail server password)
- GOOGLE_GEO (Google Geo API key)
- GOOGLE_PLACES (Google Places API key)
- DARKSKY (Darksky API key)
- MONGOOSE (Mongoose DB connection string)
- EMAIL_CHRON=*/1 * * * *
- AGENDA_CHRON=* 10 * * *
- START_CHRON=FALSE

### !Important Notes
Using Nodeman you will need to configure your mailserver or endpoint from within the:
Server > Nodemailer > sendEmail.js

The chron job by default will not start running on start. You will set START_CHRON to TRUE and restart the server to kick-off the Chron job interval tha is configurable by the EMAIL_CHRON and AGENDA_CHRON.

AGENDA_CHRON = interval that the system gets new agendas

EMAIL_CHRON = interval that the email is sent out


### Roadmap

View the project roadmap [here](https://docs.google.com/spreadsheets/d/1xCxue7CKKYoXslswFLcvdZH13hu2AlR_DTgNVaetoP0/edit?usp=sharing)

## Wireframes
View [wireframes](https://xd.adobe.com/view/99a6fd55-2be4-4161-a205-ba9e978a9fb6) 
