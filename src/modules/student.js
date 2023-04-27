import { api } from "../api";

const initialState = {
  students: [],
  lstPrintCard: [],
  isLoading: false,
}

export const STUDENT_UPDATE_STATUS = 'STUDENT_UPDATE_STATUS';
export const ADD_ONE_STUDENT_CARD = 'ADD_ONE_STUDENT_CARD';
export const REMOVE_ONE_STUDENT_CARD = 'REMOVE_ONE_STUDENT_CARD';

export function studentUpdateStatus(payload) {
  return {
    type: STUDENT_UPDATE_STATUS,
    payload
  }
}

export function addOneStudentCard(payload) {
  return {
    type: ADD_ONE_STUDENT_CARD,
    payload
  }
}

export function removeOneStudentCard(payload) {
  return {
    type: REMOVE_ONE_STUDENT_CARD,
    payload
  }
}

export function searchStudent(request) {
  return (dispatch) => {
    dispatch({
      type: STUDENT_UPDATE_STATUS,
      payload: { isLoading: true }
    })
    return api.post('attendance/search', request)
      .then(res => {
        const lstFirstName = res.map((item) => {
          const firstName = item.fullName.split(' ');
          return {
            ...item,
            firstName: firstName[firstName.length - 1]
          }
        })
        const sortedLst = lstFirstName.sort((a, b) => {
          return a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase())
        })
        return dispatch({
          type: STUDENT_UPDATE_STATUS,
          payload: { students: sortedLst }
        })
      })
      .finally(() => {
        return dispatch({
          type: STUDENT_UPDATE_STATUS,
          payload: { isLoading: false }
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
    case ADD_ONE_STUDENT_CARD: {
      const _lstPrintCard = [ ...state.lstPrintCard ]
      _lstPrintCard.push(action.payload);
      return { ...state, lstPrintCard: [..._lstPrintCard] }
    }
    case REMOVE_ONE_STUDENT_CARD: {
      const _lstPrintCard = [...state.lstPrintCard];
      const index = _lstPrintCard.findIndex(item => item.id === action.payload);
      if (index > -1) {
        _lstPrintCard.splice(index, 1);
        return { ...state, lstPrintCard: [..._lstPrintCard] }
      }
      return state;
    }
    default: return state;
  }
}
