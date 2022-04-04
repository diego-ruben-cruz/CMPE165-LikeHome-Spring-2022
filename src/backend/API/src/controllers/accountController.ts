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

    const { id } = req.params;
    console.log("Hits here");

    try {
        console.log("Hits here");
        const accRef = db.collection('Users').doc(id);
        const doc = await accRef.get();
//        let values: any[] = [];
        if (!doc.exists) 
            console.log("No such document!");
        else 
            console.log("It works");   
        res.status(httpStatus.OK).json(doc.data);
 //       console.log(doc.data);

 /*       db.collection('Users').get().then((snapshot) => {
            snapshot.docs.map((doc => doc.data));
            res.status(httpStatus.OK).json(snapshot.docs);
        }) */
    } catch (err) {
        console.log("Could not get account");
        next(err);
    }
}