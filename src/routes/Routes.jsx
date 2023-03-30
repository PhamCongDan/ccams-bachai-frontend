import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { TestPage } from "../views/ListSMSPage";
import { configRoutes } from "./configRoutes";

const RoutesMainLayout = () => {
  const isLoading = useSelector(({ appReducers }) => appReducers.isLoading)
  return (
    <>
      <Routes>
        <Route exact element={<TestPage />} path='/tra-cuu-sms' pathname='test' />
        <Route element={<Header />}>
          {configRoutes.map((route) => {
            return (
              <Route
                key={route.name}
                exact
                path={route.path}
                element={route.component}
                pathname={route.name}
              />
            );
          })}
        </Route>
      </Routes>
      {isLoading && <Loading />}
    </>
  );
};

export default RoutesMainLayout;
