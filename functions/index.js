/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");
const bodyParser = require('body-parser')
const cors = require("cors")
const express  = require('express');
const routes = require('../routes');
const cookieParser = require('cookie-parser')
const api = express();
api.use(express.json()) 
api.use(bodyParser.json())
api.use(cookieParser())
api.use(cors());
api.use(express.urlencoded({ extended: true }));

//================POSTS USERS==========
api.use('/api', routes);
exports.api = functions.https.onRequest(api);


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
/*
exports.api = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
 response.send("Hello from Firebase!");
});
*/
