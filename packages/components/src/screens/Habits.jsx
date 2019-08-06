import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'

function Habits () {
  const mockData = [
    { id: 0, title: 'Tree planting', emoji: '🌳' },
    { id: 1, title: 'Tree planting', emoji: '🌳' },
    { id: 2, title: 'Tree planting', emoji: '🌳' }
  ]

  return (
    <View>
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
  }
})

export default Habits