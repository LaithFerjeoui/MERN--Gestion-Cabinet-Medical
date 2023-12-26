import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import DashMain from '../pages/Doctors/Dashboard/DashMain'
import DashUsers from '../pages/Doctors/Dashboard/DashUsers'
const DashRoutes = () => {
  return <Routes>
    <Route path='/' element={<DashMain/>}/>
    <Route path='/users' element={<DashUsers/>} />
    
  </Routes>
}

export default DashRoutes