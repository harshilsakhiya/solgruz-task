import { Navigate } from 'react-router-dom'
import React from 'react'

const PublicRoute = ({ component: Component }) => {
  const isLogged = localStorage.getItem('token')
  return !isLogged ? <Component /> : <Navigate to="/dashboard" />
}
export default PublicRoute
