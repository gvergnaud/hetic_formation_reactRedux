import { combineReducers } from 'redux'
import router from 'redux-router/lib/routerStateReducer'
import giphs from './giphsReducer'

export default combineReducers({
  router,
  giphs
})
