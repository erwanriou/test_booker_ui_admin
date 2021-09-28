import React from "react"
import { render } from "react-dom"

// REDUX && ROUTER
import { store } from "./store"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

// COMPONENTS
import App from "./components/App"

// DEFINE ROOT AND RENDER ELEMENT
const rootElement = document.getElementById("booker")
const appRender = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

// RENDER BOOKER
render(appRender, rootElement)
