import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from '../components/Dashboard/global/Sidebar';
import Dashboard from './Dashboard';


const DashboardLayout = () => {
  return (
    <div style={{marginLeft: '-40%'}}>
        <Dashboard/>
    </div>
  )
}

export default DashboardLayout