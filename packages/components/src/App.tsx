import React from 'react'

import AuthScreen from './screens/Auth'
import HomeScreen from './screens/Home'
import AddHabit from './screens/AddHabit'
import Account from './screens/Account'

export function App () {
  const user = true

  if (user) return <HomeScreen />
  // if (user) return <AddHabit />
  // if (user) return <Account />
  return <AuthScreen />
}