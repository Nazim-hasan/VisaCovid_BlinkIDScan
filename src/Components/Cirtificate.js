import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import cirtificate from '../../assets/updated/Cirtificate.jpeg'


const Cirtificate = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View>
        <Image source={cirtificate} style={{height:400,width:400,resizeMode:'contain'}} />
      </View>
    </View>
  )
}

export default Cirtificate

const styles = StyleSheet.create({})