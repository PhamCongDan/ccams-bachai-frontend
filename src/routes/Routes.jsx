import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import Header from '../components/Header';
import { Loading } from '../components/Loading';
import { ListSMSPage } from '../views/ListSMSPage';
import { configRoutes } from './configRoutes';
import HeaderSMS from '../components/HeaderSMS';

function RoutesMainLayout() {
  const isLoading = useSelector(({ appReducers }) => appReducers.isLoading);
  return (
    <>
      <Routes>
        <Route element={<HeaderSMS />}>
          <Route exact element={<ListSMSPage />} path='/' pathname='test' />
        </Route>
        {/* <Route element={<Header />}>
          {configRoutes.map((route) => (
            <Route
              key={route.name}
              exact
              path={route.path}
              element={route.component}
              pathname={route.name}
            />
          ))}
        </Route> */}
      </Routes>
      {isLoading && <Loading />}
    </>
  );
}

export default RoutesMainLayout;
