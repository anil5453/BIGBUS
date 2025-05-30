import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { validate } from "react-email-validator";

function PopupForm({ open, onClose, onSave }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const handleSave = () => {
    onSave(firstName, lastName, emailId);
    setFirstName("");
    setLastName("");
    setEmailId("");
  };

  const validateInput = () => {
    let isValid = true;

    if (!firstName.trim()) {
      isValid = false;
    } else if (!lastName.trim()) {
      isValid = false;
    } else if (!validate(emailId)) {
      isValid = false;
    }

    return isValid;
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Passenger's details
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 9, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="First Name"
          fullWidth
          value={firstName}
          required
          helperText={!firstName.trim() && "Please enter First Name"}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Last Name"
          fullWidth
          value={lastName}
          required
          helperText={!lastName.trim() && "Please enter Last Name"}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Email Id"
          fullWidth
          value={emailId}
          required
          helperText={!validate(emailId) && "Invalid Email ID"}
          onChange={(e) => setEmailId(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={!validateInput()} onClick={handleSave} className="btn btn-outline-danger">
          Book
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PopupForm;
