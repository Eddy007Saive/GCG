import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import EmployeList from '../pages/Employee/EmployeList';
import EmployeCreate from '../pages/Employee/EmployeCreate';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} >
        <Route index element={<EmployeList />} ></Route>
        <Route  path="create"  element={<EmployeCreate />} ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;