"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = exports.db = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const firestore_1 = require("firebase-admin/firestore");
const serviceAccount = require('./keys/likehome-16818-firebase-adminsdk-qhujy-2447896d63.json');
const initDB = () => {
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert(serviceAccount)
    });
    exports.db = (0, firestore_1.getFirestore)();
};
exports.initDB = initDB;
//# sourceMappingURL=index.js.map