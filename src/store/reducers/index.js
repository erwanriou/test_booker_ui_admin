import { combineReducers } from "redux"

// GLOBAL REDUCERS
import authReducer from "./authReducer"
import offerReducer from "./offerReducer"
import globalReducer from "./globalReducer"
import errorReducer from "./errorReducer"

const reducer = () =>
  combineReducers({
    auth: authReducer,
    offer: offerReducer,
    global: globalReducer,
    errors: errorReducer
  })

export default reducer
