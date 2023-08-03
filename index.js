const { sequelize } = require('./models');
const bodyParser = require('body-parser')
const cors = require("cors")
const express  = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser')


const app = express();
app.use(express.json()) 
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//================POSTS USERS==========
app.use('/api', routes);


app.listen({ port: 6001}, async () => {
  // console.log('app running on http://localhost:6001')
   await sequelize.authenticate()
   console.log('App connected successfully: ' + Date.now().toString())

})

 

