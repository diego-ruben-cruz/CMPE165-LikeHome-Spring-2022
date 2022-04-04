import httpStatus from 'http-status';

export const pay = async (req: any, res: any, next: any) => {
  console.log('Called pay method');

  try {
    res.status(httpStatus.OK).json({});
  } catch (err) {
    console.log('payment error');
    next(err);
  }
}
