import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import Logo from '../../assets/logo.png'

function Auth () {
  function login () {
    alert('Login with Twitter OAuth...')
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ height: '256px', width: '256px' }} />

      <Text style={styles.title}>
        Build thoughtful habits
      </Text>
      
      <Button
        onPress={() => login()}
        title="Continue with Twitter"
        color="#00ACEE"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 35,
    color: '#FFFFFF'
  }
})

export default Auth