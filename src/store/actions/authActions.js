import axios from "axios"

import { AUTH_LOGIN, AUTH_REGISTER, AUTH_LOGOUT, AUTH_USER, AUTH_RECOVER, AUTH_RESET, GET_ERRORS } from "./types"
import { authLoading, clearLoading, clearErrors } from "./loadingActions"
import { modalOn, modalOff } from "./globalActions"
import { isEmpty } from "../../utils"

export const login = (userData, history) => async dispatch => {
  dispatch(authLoading())
  try {
    const res = await axios.post("/api/user/login", userData)

    dispatch({
      type: AUTH_LOGIN,
      payload: res.data,
      history
    })
  } catch (e) {
    const data = e.response.data
    dispatch({
      type: GET_ERRORS,
      payload: !isEmpty(data.errors) ? data.errors[0] : data
    })
  }
  dispatch(clearLoading())
}

export const logout = history => async dispatch => {
  dispatch(authLoading())
  try {
    await axios.get("/api/user/logout")
    localStorage.removeItem("isAuthenticated")
    dispatch({ type: AUTH_LOGOUT })
    history.push("/login")
  } catch (e) {
    const data = e.response.data
    dispatch({
      type: GET_ERRORS,
      payload: !isEmpty(data.errors) ? data.errors[0] : data
    })
  }
  dispatch(clearLoading())
}

export const register = (userData, history) => async dispatch => {
  dispatch(authLoading())
  try {
    const res = await axios.post("/auth/register", userData)

    dispatch({
      type: AUTH_REGISTER,
      payload: res.data,
      history
    })
  } catch (e) {
    const data = e.response?.data
    dispatch({
      type: GET_ERRORS,
      payload: !isEmpty(data.errors) ? data.errors[0] : data
    })
  }
  dispatch(clearLoading())
}

export const isAuthenticated = history => async dispatch => {
  dispatch(authLoading())
  try {
    const res = await axios.get("/api/user/user")

    !isEmpty(res.data.user)
      ? dispatch({
          type: AUTH_USER,
          payload: res.data.user,
          history
        })
      : localStorage.removeItem("isAuthenticated")
  } catch (e) {
    const data = e.response.data
    dispatch({
      type: GET_ERRORS,
      payload: !isEmpty(data.errors) ? data.errors[0] : data
    })
  }
  dispatch(clearLoading())
}

export const redirectLogin = history => dispatch => {
  dispatch(modalOff())
  dispatch(clearErrors())
  history.push("/login")
}
