import httpStatus from 'http-status';

export const searchHotels = async (req: any, res: any, next: any) => {
  const { location, checkIn, checkOut, guests } = req.query;

  try {
    // call api and get data
    res.status(httpStatus.OK).json({'body': 'it workd!', ...req.query});
  } catch (err) {
    console.log('search error');
    next(err);
  }
}
