import React, { createContext, useContext, useState } from "react";
import { dummyBooking } from "./GlobalConstants";
const ReservationContext = createContext();

export const useReservations = () => useContext(ReservationContext);

export const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([dummyBooking]);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  const editReservation = (updatedReservation) => {
    setReservations(
      reservations.map((res) =>
        res.id === updatedReservation.id ? updatedReservation : res
      )
    );
  };

  const deleteReservation = (resId) => {
    const updatedReservations = reservations.filter((res) => res.id !== resId);
    setReservations(updatedReservations);
  };

  return (
    <ReservationContext.Provider
      value={{
        reservations,
        addReservation,
        editReservation,
        deleteReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
