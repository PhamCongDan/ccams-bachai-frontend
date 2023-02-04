import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BaseIcon, IconPrint } from "../components/icon";
import { StudentCardItem } from "../components/search-student/StudentCardItem";

export const PrintPage = () => {
  const lstPrintCard = useSelector(
    ({ studentReducers }) => studentReducers.lstPrintCard
  );
  const navigate = useNavigate();
  return (
    <div className="bg-slate-200 min-h-screen m-auto">
      <div className="container m-auto">
        <div className="no-print flex justify-between items-center pt-4">
          <button onClick={() => navigate('/search')}>{`< Back`}</button>
          <button
            className="text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 transition ease-in-out"
            onClick={() => window.print()}
          >
            <BaseIcon>
              <IconPrint />
            </BaseIcon>
          </button>
        </div>
        <div
          id="student-card-page"
          className="w-[210mm] bg-white m-auto"
        >
          <div className="grid grid-cols-2 grid-rows-5 gap-4 px-[15mm]">
            {lstPrintCard.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`${
                    (index + 1) % 10 === 0 ? "break-after-page" : ""
                  }` }
                >
                  <StudentCardItem studentInfo={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
