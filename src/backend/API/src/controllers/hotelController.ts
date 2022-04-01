import httpStatus from 'http-status';
import { db } from '../db';

import * as hotelServices from '../services/hotelServices';

export const searchHotels = async (req: any, res: any, next: any) => {
  console.log('Called searchHotels method');

  const { location } = req.query;

  try {
    // call api and get data
    const searchResp = await hotelServices.search(location);
    const destinationId = searchResp.data.suggestions[0].entities[0].destinationId;
    delete req.query.location;
    const resp = await hotelServices.list({...req.query, destinationId});
    res.status(httpStatus.OK).json(resp.data.data.body.searchResults.results);
  } catch (err) {
    console.log('search error');
    next(err);
  }
}

export const listHotels = async (req: any, res: any, next: any) => {
  console.log('Called listHotels method');

  try {
    // call api and get data
    const resp = await hotelServices.list(req.query)
    res.status(httpStatus.OK).json(resp.data.body.searchResults.results);
    // const sample = {
    //   name: 'motel 69',
    //   rooms: ['4','2','0'],
    //   ammenities: {
    //     cat: true,
    //     dog: true,
    //     cars: 3
    //   }
    // }
    // await db.collection('Hotels').doc('Motel96').set(sample, {merge:true});
    // res.status(httpStatus.OK).json({'uh': 'huh'});
  } catch (err) {
    console.log('search error');
    next(err);
  }
}
