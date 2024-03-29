import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ItemStudent } from './ItemStudent';
import * as reportAction from '../modules/report';

function ReportLayout() {
  const reportData = useSelector(({ reportReducers }) => reportReducers.report);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      reportAction.reportUpdateStatus({
        report: [],
      }),
    );
  }, [dispatch]);

  return (
    <div className='overflow-hidden mt-4'>
      <div className='overflow-x-auto border'>
        <table className='relative w-full text-md text-left text-gray-500 z-0'>
          <thead className='text-sm text-gray-700 uppercase bg-gray-50'>
            <tr className='sticky top-0'>
              <th scope='col' className='px-6 py-3'>
                STT
              </th>
              {/* <th scope="col" className="px-6 py-3">
                ID
              </th> */}
              <th scope='col' className='px-6 py-3'>
                Tên thánh
              </th>
              <th scope='col' className='px-6 py-3'>
                Họ
              </th>
              <th scope='col' className='px-6 py-3'>
                Tên
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Chi Đoàn
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Học GL
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Lễ CN
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Lễ thường
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Tổng lễ
              </th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((item, index) => (
              <ItemStudent key={item.id} student={item} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default React.memo(ReportLayout);
