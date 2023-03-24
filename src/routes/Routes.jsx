import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
// import { TestPage } from "../views/ListSMSPage";
import { configRoutes } from "./configRoutes";

const RoutesMainLayout = () => {
  return (
    <Routes>
      {/* <Route exact element={<TestPage />} path='/test' pathname='test' /> */}
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
  );
};

export default RoutesMainLayout;
