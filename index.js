const { sequelize } = require('./models');
const bodyParser = require('body-parser')
const cors = require("cors")
const express  = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser')
//require("dotenv").config({ path: "./.env" });

const port = process.env.DB_PORT || 6001;
const inProduction = process.env.NODE_ENV === "production";

const app = express();
app.use(express.json()) 
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(
  cors({
    origin: inProduction ? "https://nhia.onrender.com" : "http://localhost:3000"
  })
);

//================POSTS USERS==========
app.use('/api/auth', routes);
const cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('Running every minute ....');
});

console.log('Cron job started')
/*
cron.schedule('30 9 * * *', () => {
  console.log('Running a task every day at 9:30 AM');
});
*/

app.listen({ port: port}, async () => {
  // console.log('app running on http://localhost:6001')
   await sequelize.authenticate()
   console.log('App connected successfully: port: ' + port + ', Production ? '+ inProduction)

})

/**
npm install pg body-parser xlsx cors express cookie-parser sequelize --save bcryptjs jsonwebtoken multer mysql2 nodemailer sequelize-cli --save && sequelize db:migrate && sequelize db:seed:all
&& sequelize db:migrate --name && sequelize db:seed --seed 220230725190525-role_permission_4.js
 */