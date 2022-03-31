import express from 'express';

import hotelRoutes from './hotelRoutes';
// import accountRoutes from './accountRoutes';
import reservationRoutes from './reservationRoutes'

const router = express.Router();

router.use('/hotel', hotelRoutes);
// router.use('/account', accountRoutes);
router.use('/reservation', reservationRoutes);
export default router;