import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as studentAction from '../../modules/student';

export const LstPrintCard = () => {
  const dispatch = useDispatch();
  const lstPrintCard = useSelector(
    ({ studentReducers }) => studentReducers.lstPrintCard
  );

  const removeStudentCard = (item) => {
    dispatch(studentAction.removeOneStudentCard(item.id))
  };
  return (
    <div className="no-print">
      {lstPrintCard.map((item, index) => {
        return (
          <div key={item.id} className="flex items-center gap-2">
            <ul>{item.fullName}</ul>
            <span className="text-red-500 cursor-pointer" onClick={() => removeStudentCard(item)}>✖</span>
          </div>
        );
      })}
    </div>
  );
};
