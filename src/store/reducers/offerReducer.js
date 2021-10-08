import {
  // AUTH TYPES
  LOADING_DATA,
  CLEAR_LOADING_DATA,
  GET_OFFERS,
  GET_OFFER
} from "../actions/types"
import { isEmpty } from "../../utils"

const initialState = {
  offers: [],
  offer: {},
  loading: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      }
    case GET_OFFERS:
      return {
        ...state,
        offers: action.payload
      }
    case GET_OFFER:
      return {
        ...state,
        offer: action.payload
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
