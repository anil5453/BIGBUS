import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import wheel from "../pics/steeringWheel.jpg"
import Seat from "./Seat";
import { useReservations } from "./ReaservationContext";
import { seatsObj } from "./GlobalConstants";

export const useStyles = makeStyles(() => ({
  container: {
    padding: "6px 40px 25px 100px",
    border: "1px solid grey",
    width: "660px",
    backgroundColor: "#fff",
    boxShadow:
      "0px 16px 24px rgb(0 0 0 / 1%), 0px 6px 30px rgb(0 0 0 / 1%), 0px 8px 10px rgb(0 0 0 / 10%) !important",
    borderRadius: "8px",
    margin: "auto",
    borderLeft: "16px solid grey",
    position: "relative",
  },
  line: {
    content: "",
    position: "absolute",
    top: 0,
    left: "64px",
    height: "100%",
    width: "1px",
    backgroundColor: "grey",
  },
  deckTitle: {
    fontFamily: "Lato",
    position: "relative",
    top: "-27px",
    left: "-106px",
  },
  steeringIcon: {
    width: "60px",
    top: "17px",
    left: "2px",
    position: "absolute",
  },
}));

const getSeatStatus = (reservations, id) => {
  let status = "available";
  reservations.forEach((res) => {
    if (res.id == id) {
      status = "booked";
    }
  });
  return status;
};

const BusLayout = ({ setSelectedSeat }) => {
  const classes = useStyles();
  const { reservations } = useReservations();

  return (
    <>
      <Box
        className={classes.container}
        sx={{ margin: "30px auto 30px auto !important" }}
      >
        <img
          className={classes.steeringIcon}
          src={wheel}
        />
        <div className={classes.deckTitle}>Lower Deck</div>
        <div className={classes.line}></div>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {Array.from({ length: 6 }, (_, i) => (
                <Grid item key={i} xs={2}>
                  <Seat
                    status={getSeatStatus(reservations, seatsObj.lowerBerth[i])}
                    onClick={setSelectedSeat}
                    seatId={seatsObj.lowerBerth[i]}
                  />
                </Grid>
              ))}
              {Array.from({ length: 6 }, (_, i) => (
                <Grid item key={i + 6} xs={2}>
                  <Seat
                    status={getSeatStatus(
                      reservations,
                      seatsObj.lowerBerth[i + 6]
                    )}
                    onClick={setSelectedSeat}
                    seatId={seatsObj.lowerBerth[i + 6]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              {Array.from({ length: 6 }, (_, i) => (
                <Grid item key={i + 12} xs={2}>
                  <Seat
                    status={getSeatStatus(
                      reservations,
                      seatsObj.lowerBerth[i + 12]
                    )}
                    onClick={setSelectedSeat}
                    seatId={seatsObj.lowerBerth[i + 12]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container}>
        <div className={classes.deckTitle}>Upper Deck</div>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {Array.from({ length: 6 }, (_, i) => (
                <Grid item key={i} xs={2}>
                  <Seat
                    status={getSeatStatus(reservations, seatsObj.upperBerth[i])}
                    onClick={setSelectedSeat}
                    seatId={seatsObj.upperBerth[i]}
                  />
                </Grid>
              ))}
              {Array.from({ length: 6 }, (_, i) => (
                <Grid item key={i + 6} xs={2}>
                  <Seat
                    status={getSeatStatus(
                      reservations,
                      seatsObj.upperBerth[i + 6]
                    )}
                    onClick={setSelectedSeat}
                    seatId={seatsObj.upperBerth[i + 6]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              {Array.from({ length: 6 }, (_, i) => (
                <Grid item key={i + 12} xs={2}>
                  <Seat
                    status={getSeatStatus(
                      reservations,
                      seatsObj.upperBerth[i + 12]
                    )}
                    onClick={setSelectedSeat}
                    seatId={seatsObj.upperBerth[i + 12]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BusLayout;
