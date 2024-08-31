import React, { useState } from 'react'
import {
  TextField,
  Alert,
  Button,
  Box,
  Typography,
  Grid,
  Paper,
} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import EventSeatIcon from '@mui/icons-material/EventSeat'
import PersonIcon from '@mui/icons-material/Person'
import PhoneIcon from '@mui/icons-material/Phone'

function BookTickets() {
  const [customerDetails, setCustomerDetails] = useState({
    customerName: '',
    customerNumber: '',
    numberOfTickets: 0,
  })

  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  function handleChange(e) {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    })
  }

  function validateForm() {
    const newErrors = {}
    if (!customerDetails.customerName.trim())
      newErrors.customerName = 'Name is required'
    if (!customerDetails.customerNumber.trim())
      newErrors.customerNumber = 'Number is required'
    if (customerDetails.numberOfTickets <= 0)
      newErrors.numberOfTickets = 'At least 1 ticket is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit() {
    if (!validateForm()) return

    try {
      console.log('count log')
      const response = await axios.post('http://localhost:3001/api/bookings', {
        customer_name: customerDetails.customerName,
        customer_mobileNo: customerDetails.customerNumber,
        number_of_tickets: customerDetails.numberOfTickets,
      })

      if (response.status === 200 || response.status === 201) {
        setSubmitStatus({
          message: 'Booking successful!',
          severity: 'success',
        })

        setTimeout(() => {
          navigate('/home')
        }, 3000)
      }
    } catch (error) {
      setSubmitStatus({
        message:
          error.response?.data?.error || 'Booking failed. Please try again.',
        severity: 'error',
      })
    }
  }

  return (
    <Box
      className="content"
      sx={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}
    >
      <Paper elevation={4} sx={{ padding: '30px', borderRadius: '15px' }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Book Your Tickets
        </Typography>
        {submitStatus && (
          <Alert severity={submitStatus.severity}>{submitStatus.message}</Alert>
        )}
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                id="customerName"
                label="Customer Name"
                value={customerDetails.customerName}
                onChange={handleChange}
                name="customerName"
                error={!!errors.customerName}
                helperText={errors.customerName}
                InputProps={{
                  startAdornment: <PersonIcon color="primary" sx={{ mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                id="customerNumber"
                label="Customer Number"
                value={customerDetails.customerNumber}
                onChange={handleChange}
                name="customerNumber"
                error={!!errors.customerNumber}
                helperText={errors.customerNumber}
                InputProps={{
                  startAdornment: <PhoneIcon color="primary" sx={{ mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                id="numberOfTickets"
                label="Number Of Tickets"
                value={customerDetails.numberOfTickets}
                onChange={handleChange}
                name="numberOfTickets"
                error={!!errors.numberOfTickets}
                helperText={errors.numberOfTickets}
                InputProps={{
                  startAdornment: (
                    <EventSeatIcon color="primary" sx={{ mr: 1 }} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handleSubmit}
                sx={{ borderRadius: '8px' }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <footer style={{ marginTop: '20px', textAlign: 'center' }}>
        <Typography variant="caption" display="block"></Typography>
      </footer>
    </Box>
  )
}

export default BookTickets
