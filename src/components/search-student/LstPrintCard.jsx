import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as studentAction from '../../modules/student';

export function LstPrintCard() {
  const dispatch = useDispatch();
  const lstPrintCard = useSelector(
    ({ studentReducers }) => studentReducers.lstPrintCard,
  );

  const removeStudentCard = (item) => {
    dispatch(studentAction.removeOneStudentCard(item.id));
  };
  return (
    <div className='no-print border p-2 mt-2 text-gray-500'>
      <p className='font-bold text-center'>DANH SÁCH IN THẺ</p>
      <ol start={1}>
        {lstPrintCard.map((item, index) => (
          <li key={item.id} className='flex items-center gap-2 '>
            <span>{`${index + 1}.${item.fullName}`}</span>
            <span
              className='text-red-500 cursor-pointer'
              onClick={() => removeStudentCard(item)}>
              ✖
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
