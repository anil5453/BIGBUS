import * as React from "react";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { useReservations } from "./ReaservationContext";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { validate } from "react-email-validator";

export default function DashBoard3() {
  const { reservations, deleteReservation, editReservation } =
    useReservations();
  const [rows, setRows] = React.useState(reservations);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [errMessage, setErrMessage] = React.useState("");
  const [isSnackBarOpen, setIsSnackBarOpen] = React.useState(false);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
    deleteReservation(id);
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const validateRow = (row) => {
    let error = "";
    if (!row.firstName.trim()) {
      error = "First Name Cannot be Empty";
    } else if (!row.lastName.trim()) {
      error = "Last Name Cannot be Empty";
    } else if (!validate(row.emailId)) {
      error = "Please enter a valid email";
    }

    if (error) {
      setIsSnackBarOpen(true);
      setErrMessage(error);
      return false;
    }
    return true;
  };

  const processRowUpdate = (updatedRow) => {
    if (!validateRow(updatedRow)) {
      return;
    }
    setRows(rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)));
    editReservation(updatedRow);
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: "id", headerName: "Seat ID", width: 100 },
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
      editable: true,
    },
    { field: "lastName", headerName: "Last Name", width: 150, editable: true },
    { field: "emailId", headerName: "Email ID", width: 150, editable: true },
    {
      field: "date",
      headerName: "Date of Booking",
      width: 150,
      editable: false,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <>
      {reservations.length > 0 ? (
        <Box
          sx={{
            marginTop: "50px",
            height: "80vh",
            width: "100%",
            "& .actions": {
              color: "text.secondary",
            },
            "& .textPrimary": {
              color: "text.primary",
            },
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
          />
        </Box>
      ) : (
        <Box
          sx={{
            width: "620px",
            height: "32px",
            display: "flex",
            margin: "16px auto",
            backgroundColor: "red",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "2px",
            fontFamily: "Lato,Helvetica",
            fontWeight: "bold",
          }}
        >
          There are no Bookings to display. Please go to the
          <Link style={{ margin: "4px" }} to="/BusBookingReactApp/reservation">
            {" "}
            {" Reservation "}{" "}
          </Link>{" "}
          section for booking.
        </Box>
      )}
      <Snackbar
        open={isSnackBarOpen}
        autoHideDuration={6000} 
        onClose={() => setIsSnackBarOpen(false)} 
      >
        <Alert
          severity="error"
          sx={{
            width: "100%",
            backgroundColor: "#de350b",
            color: "rgb(255, 255, 255)",
            "& .MuiAlert-icon": {
              color: "#fff",
            },
            fontFamily: "Lato",
          }}
        >
          {errMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
