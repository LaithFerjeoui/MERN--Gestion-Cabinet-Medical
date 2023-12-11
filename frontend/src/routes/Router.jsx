import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Docters from '../pages/Docters'
import DocterDetails from '../pages/DocterDetails'
import {Routes, Route} from 'react-router-dom'
import AppointmentForm from '../pages/appointmentForm'
const Router = () => {
  return <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/docters' element={<Docters/>} />
        <Route path='/docters/:id' element={<DocterDetails/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/appointment" element={<AppointmentForm/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
    </Routes>
}

export default Router