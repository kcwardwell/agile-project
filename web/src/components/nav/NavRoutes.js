import React from 'react'
import { Routes, Route } from 'react-router-dom'
const NavRoutes = () => {
  return (
    <Routes>
        <Route path='/' component={ <Home />} />
        <Route path='/about' component={<About />} />
    </Routes>
  )
}

export default NNavRoutesvbar