import React, {useState} from 'react';
import axios from 'react-native-axios';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App(props, {navigation}) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = e => {
    if (phone === '' && password === '') {
      alert('Enter phone and password');
      return;
    }
    if (phone !== '' && password !== '') {
      const data = {phone, password};
      console.log(data);
      axios
        .post(
          'http://192.168.0.103/PVE/Takamol_Center_Development/public/api/user/login',
          data,
        )
        .then(function (response) {
          console.log(response);
          if (response.data.status === 'success') {
            props.navigation.navigate('OtpVerification', {phone});
          } else if (response.data.status === 'failed') {
            alert('Wrong Username or password');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // props.navigation.navigate('ID Scan');
  };
  return (
    <ScrollView>

    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/updated/appLogo.png")} />


        <View style={styles.accountsForm}>
          <View style={styles.loginSign}>
            <TouchableOpacity style={styles.loginSignBtn1}>
              <Text style={styles.accountsText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginSign}>
            <TouchableOpacity
              style={styles.loginSignBtn2}
              onPress={() => {
                props.navigation.navigate('ID Scan');
              }}>
              <Text style={styles.accountsText}>REGISTRATION</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Phone no."
            placeholderTextColor="#003f5c"
            onChangeText={phone => setPhone(phone)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  accountsForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,
    marginBottom: 10,
    marginLeft: 30,
  },
  accountsText: {
    color: '#050505',
  },
  loginSign: {
    width: '50%',
  },
  image: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },

  inputView: {
    backgroundColor: '#ffffff',
    borderColor: '#0f0f0f',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
  },
  loginSignBtn2: {
    width: '85%',
    borderRadius: 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#f5f0f0',
  },
  loginSignBtn1: {
    width: '85%',
    borderRadius: 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#c4c3e8',
  },

  loginBtn: {
    width: '90%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,

    backgroundColor: "green",

  },
  textLogin: {
    color: '#ffffff',
  },
});
