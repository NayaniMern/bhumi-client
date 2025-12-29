import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Services from "./Services"

import ReportCheck from "./ReportCheck"
import About from "./About"
import Contact from "./Contact"
import Terms from './Terms'

import Dashboard from './AdminDashboard/Dashboard'
import NoPage from './NoPage'
import Login from './AdminDashboard/Login'
import ServiceDetails from './ServiceDetails'

const Routing = () => {
  return (
    <Routes>
       <Route path='/' Component={Home}/>
        <Route path='/Services' Component={Services}/>
        
          <Route path='/ReportCheck' Component={ReportCheck}/>
           <Route path='/About' Component={About}/>
             <Route path='/Terms' Component={Terms}/>
            <Route path='/Contact' Component={Contact}/>
             <Route path='/admin' Component={Login}/>
        <Route path='/dashboard' Component={Dashboard}/>
        <Route path='*' Component={NoPage}/>
        <Route path = '/ServiceDetails/:id' Component={ServiceDetails}/>
    </Routes>
  )
}

export default Routing