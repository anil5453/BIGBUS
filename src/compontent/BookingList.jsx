import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from backend
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5453/userdetails");
        const data = await response.json();
        setBookings(data); // assuming backend sends an array of user details
      } catch (error) {
        console.error("❌ Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
        <Typography variant="body2">Loading bookings...</Typography>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Booking Status
      </Typography>
      <Grid container spacing={3}>
        {bookings.length === 0 ? (
          <Typography>No bookings found.</Typography>
        ) : (
          bookings.map((booking, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
            <a href="./booking">
              <Card sx={{ boxShadow: 5 }}>
                <CardContent>
                  <Typography variant="h6">
                    {booking.firstName} {booking.lastName}
                  </Typography>
                  <Typography color="text.secondary">{booking.emailId}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    ✅ Booking Confirmed
                  </Typography>
                </CardContent>
              </Card></a>  
            
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default BookingList;
