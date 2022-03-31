import httpStatus from 'http-status';
import { db } from '../db';
//tldr just make it do the stuff in firebase
//req.body <= has data
//create a resrvation in firebase
export const createReservation = async (req: any, res: any, next: any) => {
    const {accountId} = req.params
    const {hotelName} = req.body;
    const reserveration = {hotelName};
    try{
        await db.collection('Reservations').doc(accountId).set(reserveration, {merge:true});
        res.status(httpStatus.OK).json({});
    }
    catch (err){
        console.log('you fucked up')
        next(err)
    }
}
//req.query
//get resveration via email
export const getReservation = async (req: any, res: any, next: any) => {
    //console.log("running get reservation")
    const sodumb = await req.query;
    console.log("this isthe " + sodumb.email)
    //console.log(db.collection('Reservations').doc('Jimbo').get())
    try {
        const cringe = await db.collection('Reservations').doc(sodumb.email).get()
        //const cringe = await db.collection('Reservations').doc('Jimbo').get()
        res.status(httpStatus.OK).json(cringe.data()) 
    } catch (err) {
        console.log("ya fuked up")
        next(err)
    }
}
//req.body
//delete reservation in firebase
export const deleteReservation = async (req: any, res: any, next: any) => {
    res.status(httpStatus.OK).json({});
}