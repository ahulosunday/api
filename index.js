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
//app.use(express.static(__dirname, 'public'));

app.use(
  cors({
    origin: inProduction ? "https://aisnet.onrender.com" : "http://localhost:3000"
  })
);

//================POSTS USERS==========
app.use('/api/auth', routes);

app.listen({ port: port}, async () => {
  // console.log('app running on http://localhost:6001')
   await sequelize.authenticate()
   console.log('App connected successfully: port: ' + port)

})

