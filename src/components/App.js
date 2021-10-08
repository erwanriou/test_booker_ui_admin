import React from "react"
import { Route, Switch, Link } from "react-router-dom"

// STYLES
import { JssProvider } from "react-jss"

import List from "./offer/List"
import Create from "./offer/Create"

const App = () => {
  return (
    <JssProvider classNamePrefix="booker-">
      <main>
        <header>
          <Link to="/create">CREATE OFFER</Link>
          <Link to="/">LIST OF OFFER</Link>
        </header>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/create" exact component={Create} />
        </Switch>
      </main>
    </JssProvider>
  )
}

export default App
