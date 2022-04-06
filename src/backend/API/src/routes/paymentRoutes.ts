import express from 'express';

import * as payment from '../controllers/paymentController';

const router = express.Router();

router.route('/').post(payment.pay);

export default router;