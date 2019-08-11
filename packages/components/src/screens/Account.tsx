import React from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import header from '../styles/sections'
import shared from '../styles/shared'

function Account () {

    const back = () => {
        console.log('back');
    }

    const logout = () => {
        console.log('logout');
    }

  return (
    <View>
      <ScrollView>
        <View style={shared.navBar}>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => back()}>
                <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.75946 0.412269L0.395654 9.40223C-0.131885 9.90796 -0.131885 10.7522 0.395654 11.26L9.75946 20.2479C10.3337 20.7993 11.2403 20.7993 11.8146 20.2479C12.4221 19.6643 12.4221 18.6923 11.8146 18.1077L3.97212 10.5788C3.82985 10.4428 3.82985 10.2174 3.97212 10.0814L11.8146 2.55254C12.4221 1.96892 12.4221 0.996923 11.8146 0.412269C11.5269 0.138115 11.1572 0 10.7875 0C10.4168 0 10.0471 0.138115 9.75946 0.412269Z" fill="#00ACEE"/>
                </svg>
            </TouchableOpacity>
          </View>
          <View style={shared.navItem}>
            <Text style={header.title}>Account</Text>
          </View>
          <View style={shared.navItem}></View>
        </View>

        <View style={[shared.navItem, {marginTop: 20, marginBottom: 20}]}>
            <Image source={require('../../assets/logo.png')} style={{ height: '96px', width: '96px' }} />
        </View>
        
        <View style={[{flex: 1}, shared.paddingSides]}>
            <View style={[shared.navBar, shared.borderBottom]}>
                <View style={[shared.navItem, shared.navLeft]}>
                    <Text style={shared.navLeft}>Account</Text>
                </View>
                <View style={[shared.navItem, shared.navRight]}>
                    <Text style={shared.navRight}>Guillermo Raffaele</Text>
                </View>
            </View>
            <View style={[shared.navBar, shared.borderBottom]}>
                <View style={[shared.navItem, shared.navLeft]}>
                    <Text style={shared.navLeft}>Version</Text>
                </View>
                <View style={[shared.navItem, shared.navRight]}>
                    <Text style={shared.navRight}>1.0</Text>
                </View>
            </View>
            <View style={[shared.navBar, shared.borderBottom]}>
                <View style={[shared.navItem, shared.navLeft]}>
                    <Text style={shared.navLeft}>Privacy Policy</Text>
                </View>
                <View style={[shared.navItem, shared.navRight]}>
                    <View style={shared.navRight}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path d="M14.3182 0H8.86366C8.4871 0 8.18183 0.305273 8.18183 0.681826C8.18183 1.05838 8.4871 1.36365 8.86366 1.36365H12.6722L5.6543 8.38154C5.38802 8.64782 5.38802 9.07948 5.6543 9.34576C5.7874 9.47889 5.96189 9.54545 6.13638 9.54545C6.31087 9.54545 6.48539 9.47892 6.61852 9.34573L13.6364 2.32787V6.13638C13.6364 6.51293 13.9417 6.8182 14.3182 6.8182C14.6948 6.8182 15.0001 6.51293 15.0001 6.13638V0.681826C15 0.305273 14.6948 0 14.3182 0Z" fill="#14171A"/>
                            <path d="M11.5909 6.81819C11.2143 6.81819 10.9091 7.12347 10.9091 7.50002V13.6364H1.36362V4.09092H7.5C7.87655 4.09092 8.18183 3.78564 8.18183 3.40909C8.18183 3.03254 7.87655 2.72729 7.5 2.72729H0.681826C0.305273 2.72729 0 3.03257 0 3.40912V14.3182C0 14.6947 0.305273 15 0.681826 15H11.5909C11.9675 15 12.2728 14.6947 12.2728 14.3182V7.50002C12.2727 7.12347 11.9675 6.81819 11.5909 6.81819Z" fill="#14171A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="15" height="15" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </View>
                </View>
            </View>
        </View>

        <View style={[{flex: 1, margin: 25}, shared.paddingSides]}>
            <TouchableOpacity onPress={() => logout()}>
                <View style={shared.button}>
                    <Text style={{color: '#ff0000'}}>Log out</Text>
                </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Account