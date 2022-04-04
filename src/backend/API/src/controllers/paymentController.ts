import httpStatus from 'http-status';

export const pay = async (req: any, res: any, next: any) => {
  console.log('Called pay method');

  const { accountId, hotelName } = req.body;

  // do payment stuff

  try {
    res.status(httpStatus.OK).send('Payment recieved 😏');
  } catch (err) {
    console.log('payment error');
    next(err);
  }
}
