import express from 'express';

import * as hotel from '../controllers/hotelController';

const router = express.Router();

router.route('/search').get(hotel.searchHotels);
router.route('/:hotelId').get(hotel.getDetails);
router.route('/list').get(hotel.listHotels);

export default router;