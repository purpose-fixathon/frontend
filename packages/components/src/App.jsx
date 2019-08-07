import React from 'react'

import AuthScreen from './screens/Auth'
import HomeScreen from './screens/Home'

function App () {
  const user = true

  if (user) return <HomeScreen />
  return <AuthScreen />
}

export default App