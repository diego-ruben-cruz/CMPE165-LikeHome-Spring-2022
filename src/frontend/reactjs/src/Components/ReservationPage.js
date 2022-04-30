import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Footer from './Footer';
import Header from './Header';
import Container from './Container';
import HotelData from './data.json';
import CardMedia from '@material-ui/core/CardMedia';
import room from './room.jpg';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useEffect } from 'react';
import * as api from '../api';
import  {useState} from 'react';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

// var hi = localStorage.getItem("location");
// var key = "Things to do";


const ReservationPage = () => {

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const classes = useStyles();

  // const [state, setState] = useState([])

  // useEffect(() => {
  //   getData();
  // }, [])

  // const getData = async () => {
  //   try {
  //     fetch(`http://localhost:8080/api/hotel/111803`)
  //    .then(response => response.json())
  //    .then(res => setState(res))
  //   } catch (err) {
  //     alert(err.message)
  //   }
  // }
  const handleSubmit = async () => {
  const hotelInfo = await api.hotel.getInfo("624429");
  // console.log(hotelInfo);
  }

  return (
      <>
      <Header/>
    <Box bgcolor={'alternate.main'}>
      <Container maxWidth={1800}>
        <Box marginBottom={4}>
        </Box>
        <Card sx={{ p: { xs: 4, md: 6 } }}>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={12}>
              <Box sx={{width: '50%', height: '100%', float: 'right'}}
              minHeight={300}
        component="img"
        alt="The house from the offer."
        src={room}
      />
                    <Grid item xs={12}>
                    <Typography variant="h5" component="h2">
            {HotelData.data.body.propertyDescription.name}
            </Typography>
            <Typography variant="h5" component="h2">
            Star Rating: {HotelData.data.body.propertyDescription.starRatingTitle}
          </Typography>
              <Typography>
            {HotelData.data.body.propertyDescription.address.fullAddress}
          </Typography>
          <Typography>
            Guest Rating: {HotelData.data.body.guestReviews.brands.formattedRating}
          </Typography>
          <img
                src={HotelData.data.body.propertyDescription.mapWidget.staticMapUrl}
              />
              </Grid>
              {HotelData.data.body.amenities.map((card, index) => (
                <Grid xs={12} sm={6} md={7}>
                <Typography>
                 {card.heading}: {card.listItems.map((card2, index) => (
                  <Typography>
                    {card2.heading} - {card2.listItems + ""}
                    </Typography>
                ))}
              </Typography>
              </Grid>
))}

              </Grid>

            </Grid>
            <Grid container spacing={4}>
            {HotelData.data.body.propertyDescription.roomTypeNames.map((card) => (
              
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  href='/payment/' size={'large'} variant={'contained'} type={'submit'}>
                      Book Room
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          </form>
        </Card>
      </Container>
    </Box>
    <Footer/>
    </>
  );
};

export default ReservationPage;
