import express from 'express';

import hotelRoutes from './hotelRoutes';
// import accountRoutes from './accountRoutes';
import paymentRoutes from './paymentRoutes';

const router = express.Router();

router.use('/hotel', hotelRoutes);
// router.use('/account', accountRoutes);
router.use('/payment', paymentRoutes);

export default router;