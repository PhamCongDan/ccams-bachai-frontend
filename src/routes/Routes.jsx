import React from 'react'
import { Routes, Route } from "react-router-dom";
import { PrintPage } from '../views/PrintPage';
import { ReportPage } from '../views/ReportPage';
import { SearchStudentPage } from '../views/SearchStudentPage';
import { ProtectedRoute } from './ProtectedRoute';

const RoutesMainLayout = () => {
  return (
    <Routes>
      <Route exact path='/search' element={<SearchStudentPage />} pathname='search'  />
      <Route exact path='/report' element={<ReportPage />} pathname='Report' />
      <Route
        path="/print"
        element={
          <ProtectedRoute>
            <PrintPage />
          </ProtectedRoute>
        }
      />
      <Route exact path='/' element={<ReportPage />} pathname='Report' />
    </Routes>
  )
}

export default RoutesMainLayout;
