import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import applogo from '../../assets/updated/PVE.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import axios from 'axios';
const RegistrationForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [toggleOne, setToggleOne] = useState(false);
  const [toggletwo, setToggleTwo] = useState(false);

  function handleSubmit() {
    if (
      email !== '' &&
      phone !== '' &&
      newPassword !== '' &&
      confirmPassword !== ''
    ) {
      console.log(email + phone + newPassword + confirmPassword);
      const data = {email, phone, password: newPassword};
      axios
        .post(
          'http://192.168.0.103/PVE/Takamol_Center_Development/public/api/user/create',
          data,
        )
        .then(function (response) {
          console.log(response);
          if (response.data.status === '3') {
            navigation.navigate('OtpVerification', {phone});
          } else if (response.data.status === '2') {
            alert('Email already exist! Try with another Email');
            return;
          } else if (response.data.status === '1') {
            alert('Number already exist! Try with another Phone number');
            return;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert('please fill all field !');
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={applogo} style={{height: 150, width: 150}} />
      </View>
      <View style={{margin: 10}}>
        <Text style={{textAlign: 'center', fontSize: 25, marginVertical: 10}}>
          REGISTRATION
        </Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="E-mail"
          placeholderTextColor={'gray'}
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style={styles.inputFiel}
          placeholder="Phone "
          placeholderTextColor={'gray'}
          onChangeText={e => setPhone(e)}
        />

        <View style={{position: 'relative'}}>
          <TextInput
            style={styles.inputFiel}
            secureTextEntry={!toggletwo ? true : false}
            placeholder="New Password"
            placeholderTextColor={'gray'}
            onChangeText={e => setNewPassword(e)}
          />
          <TouchableOpacity
            style={{position: 'absolute', right: '10%', top: '35%'}}>
            <Ionicons
              name={toggletwo ? 'eye' : 'eye-off'}
              size={18}
              color={'gray'}
              onPress={() => setToggleTwo(!toggletwo)}
            />
          </TouchableOpacity>
        </View>
        <View style={{position: 'relative'}}>
          <TextInput
            style={styles.inputFiel}
            secureTextEntry={!toggleOne ? true : false}
            placeholder="New Password"
            placeholderTextColor={'gray'}
            onChangeText={e => setConfirmPassword(e)}
          />
          <TouchableOpacity
            style={{position: 'absolute', right: '10%', top: '35%'}}>
            <Ionicons
              name={toggleOne ? 'eye' : 'eye-off'}
              size={18}
              color={'gray'}
              onPress={() => setToggleOne(!toggleOne)}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            backgroundColor: '#4896FF',
            margin: 10,
            borderRadius: 20,
            paddingVertical: 10,
          }}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 15}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  inputFiel: {
    borderWidth: 0.8,
    backgroundColor: '#FCFCFC',
    height: 40,
    margin: 10,
    borderColor: 'gray',
    borderRadius: 25,
    color: 'black',
    padding: 10,
  },
});
