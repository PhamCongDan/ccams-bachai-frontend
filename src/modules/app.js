const initialState = {
  isLoading: false,
  isNganhAu: false,
}

export const APP_UPDATE_STATUS = 'APP_UPDATE_STATUS';

export function appUpdateStatus(payload) {
  return {
    type: APP_UPDATE_STATUS,
    payload
  }
}

export const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case APP_UPDATE_STATUS:
      Object.keys(action.payload).forEach((prop) => {
        state[prop] = action.payload[prop]
      })
      return { ...state }
    default: return state;
  }
}
