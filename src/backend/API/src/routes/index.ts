import express from 'express';

import hotelRoutes from './hotelRoutes';
// import accountRoutes from './accountRoutes';
import paymentRoutes from './paymentRoutes';
import reservationRoutes from './reservationRoutes'

const router = express.Router();

router.use('/hotel', hotelRoutes);
// router.use('/account', accountRoutes);
router.use('/payment', paymentRoutes);

router.use('/reservation', reservationRoutes);
export default router;