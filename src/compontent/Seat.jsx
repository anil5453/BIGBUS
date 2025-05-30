import React from "react";
import { Box, Button } from "@mui/material";

function Seat({ status, onClick, seatId }) {
  const getStyle = () => {
    return {
      backgroundColor: status == "booked" ? "red" : "grey",
      cursor: status == "booked" ? "default" : "pointer",
      pointerEvents: status == "booked" ? "none" : "all",
      "&:hover": {
        backgroundColor: "green",
      },
      width: "60px",
      minWidth: "30px",
      margin: "5px",
      fontSize: "10px",
    };
  };

  const onSeatClick = () => {
    if (status == "available") {
      onClick(seatId);
    }
  };

  return (
    <Button variant="contained" sx={getStyle()} onClick={onSeatClick}>
      <Box
        sx={{
          border: "2px solid #ccc",
          padding: "10px 4px",
          position: "relative",
          left: "73%",
          borderRadius: "4px",
        }}
      ></Box>
    </Button>
  );
}

export default Seat;
