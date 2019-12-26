import React from 'react'
import Details from './containers/details'
import MyBookings from './containers/myBookings'
import { ContextProvider } from './contexts/global'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/mybookings">
            <MyBookings />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Redirect to='/mybookings' />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App;
