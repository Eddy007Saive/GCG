import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import EmployeList from '../pages/Employee/EmployeList';
import EmployeCreate from '../pages/Employee/EmployeCreate';
import EmployeDetails from '../pages/Employee/EmployeDetails';
import CongeList from '../pages/Conge/CongeList';
import CongeCreate from '../pages/Conge/CongeCreate';
import EmployeeUpdate from '../pages/Employee/EmployeUpdate';
import PosteCreate from "../pages/Poste/PosteCreate"
import DepartementCreate from "../pages/Departement/DepartementCreate"
import CongeTypeCreate from "../pages/CongeType/CongeTypeCreate"
function AppRoutes() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="employe" element={<EmployeList />} />
        <Route path="conge" element={<CongeList />} />
        <Route path="conge/create" element={<CongeCreate />} />
        <Route path="employe/create" element={<EmployeCreate />} />
        <Route path="employe/update/:id" element={<EmployeeUpdate />} />
        <Route path="employe/:id" element={<EmployeDetails />} />
        <Route path="poste" element={<PosteCreate />} />
        <Route path="departement" element={<DepartementCreate />} />
        <Route path="conge/type" element={<CongeTypeCreate />} />

      </Route>
    </Routes>
  </Router>
  );
}

export default AppRoutes;
