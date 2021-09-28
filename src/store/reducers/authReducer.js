import {
  // AUTH TYPES
  LOADING_AUTH_DATA,
  CLEAR_LOADING_DATA,
  AUTH_USER,
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_LOGOUT
} from "../actions/types"
import { isEmpty } from "../../utils"

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_AUTH_DATA:
      return {
        ...state,
        loading: true
      }
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      }
    case AUTH_LOGIN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      }
    case AUTH_REGISTER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      }
    case AUTH_LOGOUT:
      return {
        isAuthenticated: false,
        user: {},
        loading: false
      }
    case CLEAR_LOADING_DATA:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
