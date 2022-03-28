const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const admin = require("firebase-admin");
const serviceAccount = require('./keys/likehome-16818-firebase-adminsdk-qhujy-2447896d63.json');

export const initDB = () => {
  initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const db = getFirestore();