import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ReportPage } from '../views/ReportPage';
import { SearchStudentPage } from '../views/SearchStudentPage';

const RoutesMainLayout = () => {
  return (
    <Routes>
      <Route exact path='/search' element={<SearchStudentPage />} pathname='search'  />
      <Route exact path='/report' element={<ReportPage />} pathname='Report' />
    </Routes>
  )
}

export default RoutesMainLayout;
