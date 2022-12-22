import api from '../api'

const initialState = {
  unit: [],
  grade: []
}

export const STUDENT_UPDATE_STATUS = 'STUDENT_UPDATE_STATUS';

export function filterUpdateStatus(payload) {
  return {
    type: STUDENT_UPDATE_STATUS,
    payload
  }
}

// export function getUnit(id) {
//   return (dispatch) => {
//     return api.get(`${process.env.REACT_APP_API_URL}/v1/unit/${id}`)
//       .then(data => {
//         return dispatch({
//           type: STUDENT_UPDATE_STATUS,
//           payload: { unit: data }
//         })
//       })
//   }
// }

// export function getGrade(id) {
//   return (dispatch) => {
//     return api.get(`${process.env.REACT_APP_API_URL}/v1/grade`, {
//       params: {
//         unitIds: id
//       }})
//       .then(data => {
//         return dispatch({
//           type: STUDENT_UPDATE_STATUS,
//           payload: { grade: data }
//         })
//       })
//   }
// }

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
