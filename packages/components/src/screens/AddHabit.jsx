import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, Icon, ScrollView, TextInput } from 'react-native'
import header from '../styles/sections'
import shared from '../styles/shared'
import colors, { getColors } from '../styles/colors'

function AddHabit () {

  const addNewHabit = () => {
    console.log('add new habit');
  }

  const cancel = () => {
    console.log('canceled');
  }

  return (
    <View>
      <ScrollView>
        <View style={shared.navBar}>
          <View style={[shared.navItem, shared.navLeft]}>
            <TouchableOpacity onPress={() => cancel()}>
              <Text style={{color: getColors(false).azure}}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={shared.navItem}>
            <Text style={header.title}>Add habit</Text>
          </View>
          <View style={[shared.navItem, shared.navRight]}>
            <TouchableOpacity onPress={() => addNewHabit()}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[{flex: 1}, shared.paddingSides]}>
          <View style={[shared.columnBar]}>
            <View style={shared.columnLabel}>
              <Text style={shared.label}>Name</Text>
            </View>
            <View style={[shared.borderBottom]}>
              <TextInput editable={true} style={shared.input}></TextInput>
            </View>
          </View>
          
        </View>

        <View style={[{flex: 1}, shared.paddingSides]}>
          <View style={shared.columnBar}>
            <View style={shared.columnLabel}>
              <Text style={shared.label}>Add a description</Text>
            </View>
            <TextInput style={shared.textArea}></TextInput>
          </View>
        </View>
        
      </ScrollView>
    </View>
  )
}

export default AddHabit