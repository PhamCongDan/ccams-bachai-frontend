import React from "react";
import { Routes, Route } from "react-router-dom";
import { configRoutes } from "./configRoutes";

const RoutesMainLayout = () => {
  return (
    <Routes>
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
    </Routes>
  );
};

export default RoutesMainLayout;
