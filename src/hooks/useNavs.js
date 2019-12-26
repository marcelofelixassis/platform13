import { useContext } from 'react'
import { Context } from '../contexts/global'

export default () => {
  const context = useContext(Context)

  if(context) {
    const {
      state: { selectedNav },
      dispatch
    } = context
    
    const setSelectedNav = payload =>
      dispatch({
        type: 'set-selected-nav',
        payload
      })

    return {
      selectedNav,
      dispatch,
      setSelectedNav,
    }
  }
}