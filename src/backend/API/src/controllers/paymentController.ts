import httpStatus from 'http-status';
import { db } from '../db';

// example body:
// {
//   "accountId": "bob@gmail.com",
//   "reservationId": "123e4567-e89b-12d3-a456-426614174000",
//   "paymentDetails": {
//     "number": "4242424242424242",
//     "exp": "03/32",
//     "cvc": "123"
//   },
//   "saveDetails": true
// }
export const pay = async (req: any, res: any, next: any) => {
  console.log('Called pay method');

  let temp = req.body;
  
  try {
    if (!temp.paymentDetails) {
      const doc = await db.collection('Users').doc(temp.accountId).get();
      temp = {...temp, paymentDetails: doc.data()?.Payment}
      if (temp.saveDetails)
        await db.collection('Users').doc(temp.accountId).set({Payment: temp.paymentDetails}, {merge: true})
    }

    if (validateCardNumber(temp.paymentDetails)) {
      res.status(httpStatus.OK).send('Payment recieved 😏');
    } else {
      res.status(httpStatus.BAD_REQUEST).set('Invalid payment details');
    }
  } catch (err) {
    console.log('payment error');
    next(err);
  }
}

const validateCardNumber = (pd: any) => {
  let regex = new RegExp("^[0-9]{13,19}$");
  if (!regex.test(pd.number)) return false;
  regex = new RegExp("\d\d/\d\d");
  if (!regex.test(pd.exp)) return false;
  regex = new RegExp("[0-9]+\d\d3");
  if (!regex.test(pd.exp)) return false;

  return true;
}
