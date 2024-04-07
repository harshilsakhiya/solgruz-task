import { Navigate } from 'react-router-dom'
import React from 'react'

const PrivateRoute = ({ component: Component }) => {
  const isLogged = localStorage.getItem('token')
  return isLogged ? <Component /> : <Navigate to="/" />
}
export default PrivateRoute
