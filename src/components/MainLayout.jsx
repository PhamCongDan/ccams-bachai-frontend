import React from "react";
import { useSelector } from "react-redux";
import { FilterLayout } from "./FilterLayout";
import { Loading } from "./Loading";
import ReportLayout from "./ReportLayout";

export const MainLayout = () => {
  const isLoading = useSelector(({ appReducers }) => appReducers.isLoading)
  return (
    <main className="p-4 container m-auto">
      <div className="">
        <FilterLayout />
        <ReportLayout />
        {/* <button onClick={showLoading}>show loading</button> */}
      </div>
      {isLoading && <Loading />}
    </main>
  );
};
