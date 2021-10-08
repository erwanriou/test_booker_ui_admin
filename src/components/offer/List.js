import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// IMPORT STYLES
import { useStyles } from "../../styles/default.styles.js"

// IMPORT ACTIONS
import { getOffers } from "../../store/actions/offerActions"

const List = () => {
  // STATES
  const classes = useStyles()
  const dispatch = useDispatch()
  const { offers, loading } = useSelector(state => state.offer)
  const errors = useSelector(state => state.errors)

  // LIFECYLES
  useEffect(() => {
    dispatch(getOffers())
  }, [])

  // HANDLE FUNCTIONS

  // MAIN RENDER
  const offersList = offers?.map(o => <div>{o?.product_name}</div>) ?? "NO OFFERS"

  return <div>{loading ? "LOADING" : offersList}</div>
}

export default List
