import { combineReducers } from 'redux'
import { appReducers } from './app'
import { filterReducers } from './filter'
import { reportReducers } from './report'
import { studentReducers } from './student'

export const reducers = combineReducers({
  appReducers,
  filterReducers,
  reportReducers,
  studentReducers,
})