import React from 'react'

import AuthScreen from './screens/Auth'
import HabitsScreen from './screens/Habits'

function App () {
  const user = true

  if (user) return <HabitsScreen />
  return <AuthScreen />
}

export default App