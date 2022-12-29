import api from '../api'
import { downloadFileService } from '../ultils';
import { APP_UPDATE_STATUS } from './app';

const initialState = {
  report: [],
}

export const REPORT_UPDATE_STATUS = 'REPORT_UPDATE_STATUS';

export function reportUpdateStatus(payload) {
  return {
    type: REPORT_UPDATE_STATUS,
    payload
  }
}

export function getReportByClass(request) {
  return (dispatch) => {
    dispatch({
      type: APP_UPDATE_STATUS,
      payload: { isLoading: true }
    })
    return api.post(`${process.env.REACT_APP_API_URL}/v1/attendance`, {
      ...request
    }).then(res => {
      const lstData = res.sort((a, b) => {
        const first = a.firstName.toLowerCase();
        const second = b.firstName.toLowerCase();
        return first.localeCompare(second);
      });
        return dispatch({
          type: REPORT_UPDATE_STATUS,
          payload: { report: lstData }
        })
      }).finally(() => {
        dispatch({
          type: APP_UPDATE_STATUS,
          payload: { isLoading: false }
        })
      })
  }
}

export function downloadReportByClass(request) {
  return (dispatch) => {
    dispatch({
      type: APP_UPDATE_STATUS,
      payload: { isLoading: true }
    })
    return api.post(
      `${process.env.REACT_APP_API_URL}/v1/attendance/export`, { ...request},
        { responseType: 'arraybuffer'
      }).then(res => {
        downloadFileService(res, `Report ${request.startDate} _ ${request.endDate}`, 'EXCEL')
      }).finally(() => {
        dispatch({
          type: APP_UPDATE_STATUS,
          payload: { isLoading: false }
        })
      })
  }
}

export const reportReducers = (state = initialState, action) => {
  switch (action.type) {
    case REPORT_UPDATE_STATUS:
      Object.keys(action.payload).forEach((prop) => {
        state[prop] = action.payload[prop]
      })
      return { ...state }
    default: return state;
  }
}
