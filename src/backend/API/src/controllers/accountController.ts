import httpStatus from 'http-status';
import { db } from '../db';

import * as hotelServices from '../services/hotelServices';

export const getAccounts = async(req: any, res: any, next: any) => {
    console.log("Called getAccounts method");

    try {
        db.collection('Users').get().then((snapshot) => {
            snapshot.docs.map((doc => doc.data));
            res.status(httpStatus.OK).json(snapshot.docs);
        })
    } catch (err) {
        console.log("Could not get accounts");
        next(err);
    }
}
export const getAccount = async(req: any, res: any, next: any) => {
    console.log("Called getAccount method");

    try {
        db.collection('Users').get().then((snapshot) => {
            console.log(snapshot.docs);
        })
    } catch (err) {
        console.log("Could not get accounts");
        next(err);
    }
}