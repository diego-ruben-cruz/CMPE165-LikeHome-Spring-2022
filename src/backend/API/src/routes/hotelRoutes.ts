import express from 'express';

import * as hotel from '../controllers/hotelController';

const router = express.Router();

router.route('/search').get(hotel.searchHotels);

export default router;