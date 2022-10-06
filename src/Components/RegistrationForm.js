import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'


const RegistrationForm = ({navigation}) => {
  return (
    <View>
      <Text>RegistrationForm</Text>
      <Button title='Otp' onPress={()=>navigation.navigate('Otp')}/>
    </View>
  )
}

export default RegistrationForm

const styles = StyleSheet.create({})