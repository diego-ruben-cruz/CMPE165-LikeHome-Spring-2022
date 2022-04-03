import express from 'express';

import hotelRoutes from './hotelRoutes';
import accountRoutes from './accountRoutes';

const router = express.Router();

router.use('/hotel', hotelRoutes);
router.use('/account', accountRoutes);

export default router;