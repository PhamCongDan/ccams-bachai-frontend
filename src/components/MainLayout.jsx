import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterLayout } from "./FilterLayout";
import { Loading } from "./Loading";
import { ReportLayout } from "./ReportLayout";
import * as AppAction from '../modules/app'

export const MainLayout = () => {
  const dispatch = useDispatch(null)
  const isLoading = useSelector(({ appReducers }) => appReducers.isLoading)
  const showLoading = () => {
    dispatch(AppAction.appUpdateStatus({ isLoading: true }))
  }
  return (
    <main className="p-4">
      <div className="">
        <FilterLayout />
        <ReportLayout />
        {/* <button onClick={showLoading}>show loading</button> */}
      </div>
      {isLoading && <Loading />}
    </main>
  );
};
