import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import piv from "../pics/NavBarpic.jpg"

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          BIG BUS SERVICE
        </Typography>
        <Button
          color="inherit"
          sx={{ fontWeight: "bold" }}
          component={Link}
          to="/BusBookingReactApp/"
        >
          Dashboard
        </Button>
        <Button
          color="inherit"
          sx={{ fontWeight: "bold" }}
          component={Link}
          to="/BusBookingReactApp/reservation"
        >
          Reservation
        </Button>
      </Toolbar>
      <img src={piv} alt="" />
    </AppBar>
  );
}

export default NavBar;
