import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { appUpdateStatus } from '../../modules/app';

export const LstRequestedStudentCard = () => {
  const [lstData, setLstData] = useState([]);
  const dispatch = useDispatch();

  const getRequestPrintCardList = useCallback(() => {
    dispatch(appUpdateStatus({ isLoading: true }));
    axios.get(`${process.env.REACT_APP_REQUEST_STUDENT_CARD_API}/search`, {
      params: {
        'Status': '',
        'Dấu thời gian': '!'
      },
    })
      .then(response => {
        setLstData(response.data)
      })
      .finally(() => {
        dispatch(appUpdateStatus({ isLoading: false }));
      })
  }, [dispatch]);

  const updateRequestPrintCard = (name) => {
    return axios.patch(`${process.env.REACT_APP_REQUEST_STUDENT_CARD_API}/Tên thánh - Họ tên/${name}`,
      {
        'Status': 'done'
      }
    )
      .then(response => {
        return response.data
      })
      .catch(() => {
        return false
      })
  }

  const updateAll = () => {
    return Promise.allSettled(lstData.map((item) => updateRequestPrintCard(item['Tên thánh - Họ tên'])))
  }

  const updateStatus = () => {
    dispatch(appUpdateStatus({ isLoading: true }));
    updateAll()
      .then((res) => {
      getRequestPrintCardList();
    }).finally(() => {
      dispatch(appUpdateStatus({ isLoading: false }))
    });
  }
    
  useEffect(() => {
    getRequestPrintCardList();
  }, [getRequestPrintCardList])

  return (
    <div className="no-print border p-2 mt-2 text-gray-500">
      <p className="font-bold text-center">CẤP LẠI THẺ NGÀNH ẤU</p>
      {lstData.map((item, index) => {
        return (
          <div key={index} className="flex items-center gap-2 capitalize">
            <ul>{index + 1}. {item?.['Tên thánh - Họ tên']} - {item?.['Chi đoàn']}</ul>
          </div>
        );
      })}
      <div className='w-full flex justify-center mt-2'>
        <button disabled={!lstData.length} className='btn-primary--contained' onClick={updateStatus}>Xác nhận đã in</button>
      </div>
    </div>
  )
}
