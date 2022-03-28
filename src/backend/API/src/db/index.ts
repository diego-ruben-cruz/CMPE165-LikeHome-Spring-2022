import admin from 'firebase-admin';
import { Firestore, getFirestore } from 'firebase-admin/firestore'

const serviceAccount = require('./keys/likehome-16818-firebase-adminsdk-qhujy-2447896d63.json');

export let db: Firestore;

export const initDB = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  db = getFirestore();
}
