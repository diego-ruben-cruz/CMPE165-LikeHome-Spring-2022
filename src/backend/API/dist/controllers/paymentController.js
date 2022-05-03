"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pay = void 0;
const firestore_1 = require("firebase-admin/firestore");
const http_status_1 = __importDefault(require("http-status"));
const db_1 = require("../db");
// example body:
// {
//   "accountId": "bob@gmail.com",
//   "reservationId": "123e4567-e89b-12d3-a456-426614174000",
//   "paymentDetails": {
//     "number": "4242424242424242",
//     "exp": "03/32",
//     "cvc": "123"
//   },
//   "saveDetails": true,
//   "useSeals": true
// }
const pay = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Called pay method');
    let temp = req.body;
    try {
        const reservationRef = db_1.db.collection('Reservations').doc(temp.reservationId);
        const reservation = (yield (reservationRef.get())).data();
        const userRef = db_1.db.collection('Users').doc(temp.accountId);
        const user = (yield userRef.get()).data();
        const days = getDays(reservation === null || reservation === void 0 ? void 0 : reservation.checkIn, reservation === null || reservation === void 0 ? void 0 : reservation.checkOut);
        if (!(reservation === null || reservation === void 0 ? void 0 : reservation.payed)) {
            if (temp.useSeals) {
                const reqSeals = 7 + 4 * (days - 1);
                if ((user === null || user === void 0 ? void 0 : user.seals) < reqSeals)
                    res.status(http_status_1.default.BAD_REQUEST).send('Not enought seals');
                else {
                    yield userRef.set({ seals: firestore_1.FieldValue.increment(-1 * reqSeals) }, { merge: true });
                    res.status(http_status_1.default.OK).send(`Successfully payed ${reqSeals} seals`);
                }
            }
            else {
                if (!temp.paymentDetails) {
                    temp = Object.assign(Object.assign({}, temp), { paymentDetails: user === null || user === void 0 ? void 0 : user.payment });
                }
                if (temp.saveDetails)
                    yield userRef.set({ payment: temp.paymentDetails }, { merge: true });
                if (validateCardNumber(temp.paymentDetails)) {
                    yield reservationRef.set({ payed: true }, { merge: true });
                    const price = parseInt(reservation === null || reservation === void 0 ? void 0 : reservation.price);
                    let addSeals = 1;
                    if (price >= 225)
                        addSeals = 5;
                    else if (price >= 150)
                        addSeals = 3;
                    else if (price >= 75)
                        addSeals = 2;
                    yield userRef.set({ seals: firestore_1.FieldValue.increment(addSeals) }, { merge: true });
                    res.status(http_status_1.default.OK).send(`Successfully payed $${price} and gained ${addSeals} seals`);
                }
                else
                    res.status(http_status_1.default.BAD_REQUEST).send('Invalid payment details');
            }
        }
        else
            res.status(http_status_1.default.BAD_REQUEST).send('Already payed');
    }
    catch (err) {
        console.log('payment error');
        next(err);
    }
});
exports.pay = pay;
const validateCardNumber = (pd) => {
    let regex = new RegExp("^[0-9]{13,19}$");
    if (!regex.test(pd.number)) {
        console.log('invalid num');
        return false;
    }
    regex = new RegExp("[01][0-9]\/[0123][0-9]");
    if (!regex.test(pd.exp)) {
        console.log('invalid exp');
        return false;
    }
    regex = new RegExp("[0-9][0-9][0-9]");
    if (!regex.test(pd.cvc)) {
        console.log('invalid cvc');
        return false;
    }
    return true;
};
const getDays = (date1, date2) => {
    let da = date1.split('-');
    let ds = `20${da[2]}-${da[0]}-${da[1]}`; // YYYY-MM-DD
    const d1 = new Date(ds);
    da = date2.split('-');
    ds = `20${da[2]}-${da[0]}-${da[1]}`; // YYYY-MM-DD
    const d2 = new Date(ds);
    const time = d2.getTime() - d1.getTime();
    const days = time / (1000 * 3600 * 24);
    return days;
};
//# sourceMappingURL=paymentController.js.map