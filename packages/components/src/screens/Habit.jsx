import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, Icon, ScrollView } from 'react-native'

function Habit (habitName) {
    

  return (
    <View style={{flex: 1}}>
        <View style={styles.center}>
            {/* TODO: implement commented-out code */}
            {/* <Text style={styles.title}>{habitName}</Text> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 22
      },
      title: {
        fontSize: '18px',
        fontWeight: 'bold'
      },
})

export default Habit