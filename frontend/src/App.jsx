import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: ''
  })

  const [submission, setSubmission] = useState({})

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = values.email.toLowerCase()

    setSubmission((prev) => {
      if (prev[email]) {
        return {
          ...prev,
          [email]: {
            ...prev[email],
            count: prev[email].count + 1
          }
        }
      }

      return {
        ...prev,
        [email]: {
          firstname: values.firstname,
          lastname: values.lastname,
          email: email,
          count: 1
        }
      }
    })

    setValues({
      firstname: '',
      lastname: '',
      email: ''
    })
  }

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor='firstname'>First Name:</label>
          <input
            type='text'
            name='firstname'
            value={values.firstname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='lastname'>Last Name:</label>
          <input
            type='text'
            name='lastname'
            value={values.lastname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <button type='submit'>Submit</button>

      </form>

      <h3>Submission Table</h3>
      <table border='1'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Submission Count</th>
          </tr>
        </thead>

        <tbody>
          {
            Object.keys(submission).map((key) => {
              const entry = submission[key]
              return (
                <tr key={key}>
                  <td>{entry.firstname}</td>
                  <td>{entry.lastname}</td>
                  <td>{entry.email}</td>
                  <td>{entry.count}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
