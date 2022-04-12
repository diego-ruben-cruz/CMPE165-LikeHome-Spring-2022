import { ActionToHTTPMethod } from '@google-cloud/storage/build/src/file';
import httpStatus from 'http-status';
import { db } from '../db';

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

    const { accountId } = req.params;

    try {
        const accRef = db.collection('Users').doc(accountId);
        const doc = await accRef.get();
        if (!doc.exists) 
            console.log("No such document!");
        else 
            console.log("Document found");   
        res.status(httpStatus.OK).json(doc.data());
    } catch (err) {
        console.log("Could not get account");
        next(err);
    }
}

export const createAccount = async(req: any, res: any, next: any) => {
    console.log("Called createAccount method");
    
    try {
        // const toAdd = {
        //     Name: 'Mike Rotch',
        //     Password: 'lolz',
        //     Email:  '1234@other.com',
        //     Phone: 2223334444,
        //     CreditCard: 1234567899993333,
        //     Payment: {
        //         ccv: '111',
        //         expiration: '1/2/11',
        //         number: '2223334444'
        //     }
        // }
        const {name, password, email, phone, creditCard, payment, ccv, expiration, number} = req.body;
        const toAdd = {
            name,
            password,
            email,
            phone,
            creditCard,
            payment: {
                ccv,
                expiration,
                number
            }
        }
        const ret = await db.collection('Users').doc(name).set(toAdd, {merge:true});
        res.status(httpStatus.OK).json();
    } catch(err) {
        console.log("Could not create new account");
        next(err);
    }
}


export const updateAccount = async(req: any, res: any, next: any) => {
    console.log("Called updateAccount method");

    try {
        
    } catch(err) {
        console.log("Could not update account");
        next(err);
    }
}


export const deleteAccount = async(req: any, res: any, next: any) => {
    console.log("Called deleteAccount method");

    try {
        
    } catch(err) {
        console.log("Could not delete account");
        next(err);
    }
}