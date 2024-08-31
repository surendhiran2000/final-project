import React, { useState } from 'react'
import textConstant from '../config'
import { TextField, Alert, Button } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
  const navigate = useNavigate()
  const [customerDetails, setCustomerDetails] = useState({
    customerName: '',
    password: '',
    email: '',
    confirmPassword: '',
  })

  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    severity: '',
  })
  function handleChange(e) {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    })
  }
  async function handleSubmit() {
    console.log('customerDetails', customerDetails)
    if (customerDetails.password !== customerDetails.confirmPassword) {
      setSubmitStatus({
        message: 'Passwords do not match. Please check your password.',
        severity: 'error',
      })
      return
    }

    try {
      const response = await axios.post('http://localhost:3001/api/register', {
        username: customerDetails.customerName,
        email: customerDetails.email,
        password: customerDetails.password,
      })
      console.log('response', response)
      if (response.status === 200 || 201) {
        // Registration successful
        setSubmitStatus({
          message: 'Registration successful!',
          severity: 'success',
        })

        // Redirect after successful registration
        setTimeout(() => {
          navigate('/')
        }, 1000)
      }
    } catch (error) {
      // Handle errors from the API
      setSubmitStatus({
        message:
          error.response?.data?.error ||
          'Registration failed. Please try again.',
        severity: 'error',
      })
    }
  }
  return (
    <>
      <div className="login">
        <div className="main">
          <h1 className="authFormH1">Register </h1>
          <h3>Enter your login credentials</h3>
          <label className="authFormLabel" htmlFor="first">
            Username:
          </label>
          <input
            className="authFormInput"
            type="text"
            id="customerName"
            value={customerDetails.customerName}
            onChange={handleChange}
            name="customerName"
            placeholder="Enter your Username"
            required
          />

          <label className="authFormLabel" htmlFor="email">
            Email:
          </label>
          <input
            className="authFormInput"
            type="text"
            id="email"
            value={customerDetails.email}
            onChange={handleChange}
            name="email"
            placeholder="Enter your Username"
            required
          />

          <label className="authFormLabel" htmlFor="password">
            Password:
          </label>
          <input
            className="authFormInput"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
            value={customerDetails.password}
            onChange={handleChange}
          />
          <label className="authFormLabel" htmlFor="ConfirmPassword">
            Confirm Password:
          </label>
          <input
            className="authFormInput"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Enter your Password"
            required
            value={customerDetails.confirmPassword}
            onChange={handleChange}
          />

          <div className="wrap">
            <button
              className="authFormButton"
              // type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <p>
            Click to
            <a href="/" style={{ textDecoration: 'none' }}>
              Login
            </a>
          </p>

          {submitStatus.message && (
            <Alert
              variant="filled"
              severity={submitStatus.severity}
              style={{ marginTop: '20px' }}
            >
              {submitStatus.message}
            </Alert>
          )}
        </div>
      </div>
    </>
  )
}
export default RegisterPage
