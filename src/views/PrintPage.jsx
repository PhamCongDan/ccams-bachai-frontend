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
            className="btn-primary--contained"
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
          <div className="grid grid-cols-2 grid-rows-5 gap-4 gap-y-8 px-[8mm]">
            {lstPrintCard.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`${
                    (index + 1) % 8 === 0 ? "break-after-page" : ""
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
