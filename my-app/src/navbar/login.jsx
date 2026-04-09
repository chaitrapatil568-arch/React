
import React from 'react'

function Login() {
  return (
    <div>
        <h1>Login Page</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>

    </div>
  )
}

export default Login
