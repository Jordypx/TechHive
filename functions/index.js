/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions")

const express = require("express");
const cors = require("cors")
const stripe = require("stripe")("sk_test_51Ld0W4DtscEe2fhBAIOsTAww63iAdVHcxHj1wbDwO7S8kVNxF6CEqyv81gO8oM8yPB4PyTI7BiEAspaJpzLGyfC10012LvZ1DT")

// API

// App config
const app = express();

// MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());

//  -API routes
app.get('/', (request, response) => response.status(200).send('hello world'));


app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;

    console.log('jjodjjd', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status({
        clientSecret: paymentIntent.client_Secret,
    })
})

// Listen 
exports.api = functions.https.onRequest(app)

// http://127.0.0.1:5001/tech-hive-cd5ea/us-central1/api