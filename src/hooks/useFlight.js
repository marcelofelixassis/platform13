import { useContext } from 'react'
import { Context } from '../contexts/global'

export default () => {
  const context = useContext(Context)

  if(context) {
    const {
      state: { flights },
      dispatch
    } = context
    
    const setFlights = payload =>
      dispatch({
        type: 'set-flights',
        payload
      })

    const setCurrentFlight = payload =>
      dispatch({
        type: 'set-current-flight',
        payload
      })

    return {
      flights,
      dispatch,
      setFlights,
      setCurrentFlight
    }
  }
}