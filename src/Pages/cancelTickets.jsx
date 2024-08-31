import React, { useState } from "react";
import { TextField, Alert, Button, Container, Typography, Box } from "@mui/material";
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import '../App.css'; 

export default function CancelTickets() {
  const [ticketId, setTicketId] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);

  function handleChange(e) {
    setTicketId(e.target.value);
  }

  async function handleCancel() {
    try {
      const response = await axios.delete(`http://localhost:3001/api/bookings/${ticketId}`);
      if (response.status === 200) {
        setSubmitStatus({
          message: 'Ticket canceled successfully!',
          severity: 'success',
        });
        setTicketId(''); // Clear the input field
      }
    } catch (error) {
      setSubmitStatus({
        message: error.response?.data?.error || 'Cancellation failed. Please try again.',
        severity: 'error',
      });
    }
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: 3,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
          transition: 'transform 0.3s ease-in-out', // Adding animation to the Box
        }}
        className="slide-in" // Class for slide-in animation
      >
        <Typography variant="h4" gutterBottom>
          <mark>Cancel Tickets</mark>
        </Typography>
        <TextField
          style={{ padding: '10px' }}
          type="text"
          id="ticketId"
          label="Enter the Ticket ID"
          value={ticketId}
          onChange={handleChange}
          name="ticketId"
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={handleCancel}
          style={{ marginTop: '16px' }}
        >
          Cancel
        </Button>
        <CSSTransition
          in={submitStatus !== null}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Alert
            severity={submitStatus?.severity}
            style={{ marginTop: '16px', width: '100%' }}
          >
            {submitStatus?.message}
          </Alert>
        </CSSTransition>
      </Box>
    </Container>
  );
}
