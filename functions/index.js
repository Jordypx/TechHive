/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require("firebase-functions")

const express = require("express")
const cors = require("cors")

const stripe = require("stripe")("sk_test_51Ld0W4DtscEe2fhBAIOsTAww63iAdVHcxHj1wbDwO7S8kVNxF6CEqyv81gO8oM8yPB4PyTI7BiEAspaJpzLGyfC10012LvZ1DT")


const app = express();

app.use(cors({ origins: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('hello bitch'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('payment Request done', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
 
// http://127.0.0.1:5001/tech-hive-cd5ea/us-central1/api