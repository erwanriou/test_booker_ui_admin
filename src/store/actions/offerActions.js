import axios from "axios"

import { getOffersAPI } from "./mock/api"
import { GET_OFFERS, GET_ERRORS } from "./types"
import { loading, clearLoading, clearErrors } from "./loadingActions"

export const createOffer = (offerData, history) => async dispatch => {
  dispatch(loading())
  try {
    const res = await axios.post("/api/offer/admin/offer/create", offerData)

    history.push("/")
  } catch (e) {
    const data = e.response.data
    dispatch({
      type: GET_ERRORS,
      payload: e?.response?.data ?? JSON.stringify(e)
    })
  }
  dispatch(clearLoading())
}

export const getOffers = () => async dispatch => {
  dispatch(loading())
  try {
    const res = await getOffersAPI()
    console.log(res)
    dispatch({
      type: GET_OFFERS,
      payload: res.data
    })
  } catch (e) {
    const data = e.response.data
    dispatch({
      type: GET_ERRORS,
      payload: e?.response?.data ?? JSON.stringify(e)
    })
  }
  dispatch(clearLoading())
}
