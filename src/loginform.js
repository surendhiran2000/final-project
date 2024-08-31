import React, { useState } from 'react';

function LoginForm() {
  const [customerDetails, setCustomerDetails] = useState({
    customerName: '',
    customerNumber: null,
    numerOfTickets: 0
  })
  function handleChange(e) {

    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit() {
    console.log(customerDetails)
  }
  return (
    <div className='A'>
      <div>
        <h3>book your tickets</h3>
      </div>

      <br />
      <br />
      <div>
        <label style={{ color: 'white' }}>
          Customer Name
          <div>
            <input type="text" id="customerName" value={customerDetails.customerName} onChange={handleChange} name="customerName" />
          </div>
        </label>

      </div>
      <div>
        <label>
          Customer Number
          <div>

            <input type="Number" id="customerNumber" value={customerDetails.customerNumber} onChange={handleChange} name="customerNumber" />
          </div>
        </label>
      </div>
      <div>
        <label>
          Number Of Tickets
          <div>

            <input type="number" id="numerOfTickets" value={customerDetails.numerOfTickets} onChange={handleChange} name="numerOfTickets" />
          </div>
        </label>
      </div>
      <button onClick={handleSubmit} style={{ color: 'red' }}>submit</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div >
  )
}
export default LoginForm;