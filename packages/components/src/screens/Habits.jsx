import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, Icon, ScrollView } from 'react-native'

function Habits () {

  // var Dimensions = require('Dimensions');
  // var {width, height} = Dimensions.get('window');

  const mockData = [
    { id: 0, title: 'Tree planting', emoji: '🌳' },
    { id: 1, title: 'Tree planting', emoji: '🌳' },
    { id: 2, title: 'Tree planting', emoji: '🌳' }
  ]

  const addNewHabit = () => {
    console.log('add new habit');
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.center}>
          <Text></Text>
          <Text style={styles.title}>Habits</Text>
          <Image source={require('../../assets/logo.png')} style={{ height: '32px', width: '32px' }} />
        </View>

        <FlatList
          data={mockData}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item.emoji} {item.title}</Text>
            </View>
          )}
        />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={addNewHabit} style={styles.plusButton}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
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
  listItem: {
    padding: 16,
    borderColor: '#000000',
    borderBottomWidth: 1
  },
  plusButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  plusButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  footer: {
    position: 'fixed',
    height: 50,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

export default Habits