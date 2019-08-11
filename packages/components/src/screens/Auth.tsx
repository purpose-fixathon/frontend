import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import getColors from '../styles/colors';

function Auth () {
  function login () {
    console.log('Login with Twitter OAuth...')
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={{ height: '256px', width: '256px', marginBottom: '20px' }}
      />

      <Text style={styles.title}> Build thoughtful habits</Text>
      
      <TouchableOpacity style={styles.twitterBtn} onPress={() => login()}>
        <Text style={styles.twitterBtnText}>Continue with Twitter</Text>
        <Image source={require('../../assets/twitter.png')} style={{ height: '20px', width: '20px' }} />
      </TouchableOpacity>
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
  },
  twitterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: getColors().twitterBlue,
    height: 50,
    paddingLeft: 22,
    paddingRight: 22,
    borderRadius: 25
  },
  twitterBtnText: {
    color: '#FFF',
    // fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12
  }
})

export default Auth