import React from "react";
import { useSelector } from "react-redux";
import { ItemStudent } from "./ItemStudent";

export const ReportLayout = () => {
  const reportData = useSelector(({ reportReducers }) => reportReducers.report);

  return (
    <div className="overflow-hidden mt-4">
      <div className="m-auto border p-4 overflow-auto max-h-[500px]">
        <div className="grid grid-cols-12 p-1 min-w-[800px]">
          <div className="col-span-1">STT</div>
          <div className="col-span-1">Tên Thánh</div>
          <div className="col-span-3">Họ</div>
          <div className="col-span-1">Tên</div>
          <div className="col-span-1">Chi đoàn</div>
          <div className="col-span-1 text-center">Học GL</div>
          <div className="col-span-1 text-center">Lễ CN</div>
          <div className="col-span-1 text-center">Lễ thường</div>
          <div className="col-span-1 text-center">Tổng lễ</div>
        </div>
        {reportData.map((item, index) => {
          return <ItemStudent key={item.id} student={item} index={index} />;
        })}
      </div>
    </div>
  );
};
