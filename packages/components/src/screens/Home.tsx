import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import header from '../styles/sections'
import shared from '../styles/shared';

function Habits () {

  // var Dimensions = require('Dimensions');
  // var {width, height} = Dimensions.get('window');

  const mockData = [
    { id: 0, title: 'Tree planting', emoji: '🌳' },
    { id: 1, title: 'Using the bike', emoji: '🚲' },
    { id: 2, title: 'Buying local', emoji: '🍅' }
  ]

  const addNewHabit = () => {
    console.log('add new habit');
  }



  return (
    <View>
      <ScrollView>
        <View style={shared.navBar}>
          <View style={{flex: 1}}>
            <Image source={require('../../assets/logo.png')} style={{ height: '32px', width: '32px' }} />
          </View>
          <View style={shared.navItem}><Text style={header.title}>Home</Text></View>
          <View style={shared.navItem}></View>
          {/* TODO: change fixed dimensions to those dependent on device's screen's dimensions (32px would be too small for a tablet) */}
        </View>
        <View style={shared.paddingSides}>
          <FlatList
            data={mockData}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => addNewHabit()} key={item.id}>
                <View style={[shared.navBar, shared.borderBottom]}>
                  <View style={[shared.navItem, shared.navLeft]}>
                    <Text style={shared.navLeft}>{item.emoji} {item.title}</Text>
                  </View>
                  <View style={[shared.navItem, shared.navRight]}>
                    {/* TODO: center the three dots vertically */}
                    {/* <View style={shared.navRight}> */}
                      <Image source={require('../../assets/more.png')} style={{ height: '6px', width: '22px' }} />
                    {/* </View> */}
                  </View>
                </View>
              </TouchableOpacity>
            )}
          ></FlatList>
        </View>
      </ScrollView>
    

      <View style={styles.footer}>
        <TouchableOpacity onPress={addNewHabit} style={styles.plusButton}>
          {/* TODO: center the plus as it's not exactly placed in the center */}
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
  plusButton: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  plusButtonText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    height: 50,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

export default Habits