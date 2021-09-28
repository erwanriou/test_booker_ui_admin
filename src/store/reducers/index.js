import { combineReducers } from "redux"

// GLOBAL REDUCERS
import authReducer from "./authReducer"
import globalReducer from "./globalReducer"
import errorReducer from "./errorReducer"

const reducer = () =>
  combineReducers({
    auth: authReducer,
    global: globalReducer,
    errors: errorReducer
  })

export default reducer
