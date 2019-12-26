import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import produce from 'immer'

const localState = JSON.parse(sessionStorage.getItem('state'))
const Context = createContext()

export const initialState = {
  flights: {
    itens: [],
    currentFlight: {},
  },
  selectedNav: 'My Profile'
}

export const reducer = (state, action) => {
  const nextState = produce(state, draft => {
    switch(action.type) {
      case 'set-flights':
        draft.flights.itens = action.payload
        break
      
      case 'set-current-flight':
        draft.flights.currentFlight = action.payload
        break
      
      case 'set-selected-nav':
        draft.selectedNav = action.payload
        break
      
      default:
        return {...initialState}
    }
  })

  return nextState
}

const ContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, localState || initialState)
  let value = { state, dispatch }

  useEffect(() => {
    window.sessionStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return <Context.Provider value={value}>{children}</Context.Provider>
}

ContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

let ContextConsumer = Context.Consumer

export { Context, ContextProvider, ContextConsumer }