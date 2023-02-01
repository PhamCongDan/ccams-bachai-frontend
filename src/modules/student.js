import { api } from "../api";

const initialState = {
  students: [],
  isLoading: false,
}

export const STUDENT_UPDATE_STATUS = 'STUDENT_UPDATE_STATUS';

export function studentUpdateStatus(payload) {
  return {
    type: STUDENT_UPDATE_STATUS,
    payload
  }
}

export function searchStudent(request) {
  return (dispatch) => {
    // dispatch({
    //   type: 
    // })
    return api.post('attendance/search', request)
      .then(res => {
        console.log(res);
        return dispatch({
          type: STUDENT_UPDATE_STATUS,
          payload: { students: res }
        })
      })
  }
}

export const studentReducers = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_UPDATE_STATUS:
      Object.keys(action.payload).forEach((prop) => {
        state[prop] = action.payload[prop]
      })
      return { ...state }
    default: return state;
  }
}
