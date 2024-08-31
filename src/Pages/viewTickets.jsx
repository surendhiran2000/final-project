import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Alert,
  IconButton,
  TextField,
  TablePagination,
  Tooltip,
  Box,
} from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import SearchIcon from '@mui/icons-material/Search'

function ViewTickets() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  useEffect(() => {
    viewTickets()
  }, [])

  function viewTickets() {
    setLoading(true)
    axios
      .get('http://localhost:3001/api/bookings')
      .then((response) => {
        setBookings(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError('Failed to fetch bookings. Please try again later.')
        setLoading(false)
      })
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const filteredBookings = bookings.filter((booking) => {
    const customerName = booking.customerName
      ? booking.customerName.toLowerCase()
      : ''
    const bookingId = booking.id ? booking.id.toString() : ''

    return (
      customerName.includes(searchQuery.toLowerCase()) ||
      bookingId.includes(searchQuery)
    )
  })
  console.log('filteredBookings', filteredBookings)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        View Booked Tickets
        <Tooltip title="Refresh">
          <IconButton onClick={viewTickets} style={{ marginLeft: '10px' }}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Typography>

      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <TextField
          variant="outlined"
          label="Search by Name or ID"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
      </div>

      {loading ? (
        <CircularProgress style={{ display: 'block', margin: '20px auto' }} />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <TableContainer
            component={Paper}
            style={{ maxWidth: '80%', margin: '0 auto' }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Booking ID</TableCell>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Customer Number</TableCell>
                  <TableCell>Number of Tickets</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredBookings.length > 0 ? (
                  filteredBookings
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((booking) => (
                      <TableRow key={booking.id} hover>
                        <TableCell>{booking.ticket_id}</TableCell>
                        <TableCell>{booking.customer_name}</TableCell>
                        <TableCell>{booking.customer_mobileNo}</TableCell>
                        <TableCell>{booking.number_of_tickets}</TableCell>
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No bookings available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredBookings.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </>
      )}
    </Box>
  )
}

export default ViewTickets
