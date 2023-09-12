import { api } from '../api';
import { downloadFileService } from '../ultils';
import { APP_UPDATE_STATUS } from './app';

const initialState = {
  score: [],
};

export const SCORE_UPDATE_STATUS = 'SCORE_UPDATE_STATUS';

export function scoreUpdateStatus(payload) {
  return {
    type: SCORE_UPDATE_STATUS,
    payload,
  };
}

export function getScoreByClass(request) {
  return (dispatch) => {
    dispatch({
      type: APP_UPDATE_STATUS,
      payload: { isLoading: true },
    });
    return api
      .get('score', {
        params: {
          gradeId: request.gradeId,
          semesterIds: request.semesterIds,
        },
      })
      .then((res) =>
        dispatch({
          type: SCORE_UPDATE_STATUS,
          // payload: { report: lstData }
        }),
      )
      .finally(() => {
        dispatch({
          type: APP_UPDATE_STATUS,
          payload: { isLoading: false },
        });
      });
  };
}

export function downloadReportByClass(request) {
  return (dispatch) => {
    dispatch({
      type: APP_UPDATE_STATUS,
      payload: { isLoading: true },
    });
    return api
      .post(
        'attendance/export',
        { ...request },
        { responseType: 'arraybuffer' },
      )
      .then((res) => {
        downloadFileService(
          res,
          `Report ${request.startDate} _ ${request.endDate}`,
          'EXCEL',
        );
      })
      .finally(() => {
        dispatch({
          type: APP_UPDATE_STATUS,
          payload: { isLoading: false },
        });
      });
  };
}

export const scoreReducers = (state = initialState, action) => {
  switch (action.type) {
    case SCORE_UPDATE_STATUS:
      Object.keys(action.payload).forEach((prop) => {
        state[prop] = action.payload[prop];
      });
      return { ...state };
    default:
      return state;
  }
};
