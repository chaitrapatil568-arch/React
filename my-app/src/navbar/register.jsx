import React from 'react'



function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <button type="submit">Register</button>
    </div>
  )
}

export default Register
