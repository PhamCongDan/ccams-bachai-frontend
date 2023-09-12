import { api } from '../api';
import { APP_UPDATE_STATUS } from './app';

const initialState = {
  grade: [],
  class: [],
};

export const FILTER_UPDATE_STATUS = 'FILTER_UPDATE_STATUS';

export function filterUpdateStatus(payload) {
  return {
    type: FILTER_UPDATE_STATUS,
    payload,
  };
}

export function getGrade(id) {
  return (dispatch) => {
    dispatch({
      type: APP_UPDATE_STATUS,
      payload: { isLoading: true },
    });
    return api
      .get(`unit/${id}`)
      .then((data) =>
        // comment this for production
        // if (data.length > 1) data.push({ name: 'Tất cả', id: data.map(x => x.id).toString() })
        dispatch({
          type: FILTER_UPDATE_STATUS,
          payload: { grade: data },
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

export function getClass(id) {
  return (dispatch) => {
    dispatch({
      type: APP_UPDATE_STATUS,
      payload: { isLoading: true },
    });
    return api
      .get('grade', {
        params: {
          unitIds: id,
          scholasticId: '4',
        },
      })
      .then((data) =>
        // comment this for production
        // if (data.length > 1) data.push({ name: 'Tất cả', id: 'all' })
        dispatch({
          type: FILTER_UPDATE_STATUS,
          payload: { class: data },
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

export const filterReducers = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_UPDATE_STATUS:
      Object.keys(action.payload).forEach((prop) => {
        state[prop] = action.payload[prop];
      });
      return { ...state };
    default:
      return state;
  }
};
