import React, { useState } from 'react'
import textConstant from '../config'
import { TextField, Alert, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const adminData = textConstant.adminDetails
  const navigate = useNavigate()
  const [customerDetails, setCustomerDetails] = useState({
    email: '',
    password: '',
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

  async function handleSubmit(e) {
    e.preventDefault() // Prevent the default form submission behavior
    console.log(
      customerDetails.email,
      adminData.email,
      customerDetails.password,
      adminData.passWord,
    )
    try {
      if (
        customerDetails.email === adminData.email &&
        customerDetails.password === adminData.passWord
      ) {
        localStorage.setItem('isAdmin', true)
        setSubmitStatus({
          message: 'Login successful!',
          severity: 'success',
        })
        setTimeout(() => {
          navigate('/home')
        }, 1000)
      } else {
        const response = await axios.post('http://localhost:3001/api/login', {
          email: customerDetails.email, // Assuming "customerName" is the email
          password: customerDetails.password,
        })
        if (response.status === 200) {
          localStorage.setItem('isAdmin', false)
          setSubmitStatus({
            message: 'Login successful!',
            severity: 'success',
          })
          setTimeout(() => {
            navigate('/home')
          }, 1000)
        }
      }
    } catch (error) {
      setSubmitStatus({
        message:
          error.response?.data?.error || 'Login failed. Please try again.',
        severity: 'error',
      })
    }
  }

  return (
    <div className="login">
      <div className="main">
        <h1 className="authFormH1">LOGIN</h1>
        <h3>Enter your login credentials</h3>
        <form action="">
          <label className="authFormLabel" htmlFor="first">
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

          <div className="wrap">
            <button
              className="authFormButton"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
        <p>
          Not registered?
          <a href="/register" style={{ textDecoration: 'none' }}>
            Create an account
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
  )
}
export default Login
