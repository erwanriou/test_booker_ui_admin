import { MODAL_OFF, MODAL_ON } from "../actions/types"

const initialState = {
  modal: false
}

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_ON:
      return {
        ...state,
        modal: true
      }
    case MODAL_OFF:
      return {
        ...state,
        modal: false
      }
    default:
      return state
  }
}
