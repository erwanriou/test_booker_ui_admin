import React, { useEffect, useState } from "react"

const Create = ({}) => {
  // STATES
  const [state, setState] = useState({ name: "", discount: "" })
  const [errors, setErrors] = useState(null)

  // HANDLE FUNCTIONS
  const handleSubmit = e => {
    e.preventDefault()

    const data = {
      ...state
    }

    // CALL TO BE
  }

  // MAIN RENDER
  return <form onSubmit={handleSubmit}>asdlkahsfas</form>
}

export default Create
