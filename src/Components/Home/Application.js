import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';

const Application = () => {
  const [selectedGender, setSelectedGender] = useState();

  const handleApplication = e => {
    console.log(selectedGender);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{margin: 10}}>
        <Text style={{textAlign: 'center', fontSize: 20, marginVertical: 10}}>
          Personal Information
        </Text>

        <Text style={{marginLeft: 10}}>Full Name</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="Full Name"
          placeholderTextColor={'gray'}
        />
        <Text style={{marginLeft: 10}}>Father Name</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="Father Name"
          placeholderTextColor={'gray'}
        />

        <Picker
          selectedValue={selectedGender}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedGender(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Text style={{marginLeft: 10}}>Gender</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="Gender"
          placeholderTextColor={'gray'}
        />

        <Text style={{marginLeft: 10}}>DOB</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="DOB"
          placeholderTextColor={'gray'}
        />

        <Text style={{marginLeft: 10}}>Passport No</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="Passport"
          placeholderTextColor={'gray'}
        />

        <Text style={{marginLeft: 10}}>Passport Exp</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="Passport exp"
          placeholderTextColor={'gray'}
        />

        <Text style={{marginLeft: 10}}>Mobile</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="Mobile"
          placeholderTextColor={'gray'}
        />

        <Text style={{marginLeft: 10}}>Email</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="Email"
          placeholderTextColor={'gray'}
        />

        <Text style={{textAlign: 'center', fontSize: 20, marginVertical: 10}}>
          Education Qualification
        </Text>

        <Text style={{marginLeft: 10}}>Degree</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="Degree"
          placeholderTextColor={'gray'}
        />
        <Text style={{marginLeft: 10}}>Result</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="Result"
          placeholderTextColor={'gray'}
        />

        <Text style={{marginLeft: 10}}>Name of the Institution</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="Gender"
          placeholderTextColor={'gray'}
        />

        <Text style={{marginLeft: 10}}>Address</Text>
        <TextInput
          style={styles.inputFiel}
          placeholder="Address"
          placeholderTextColor={'gray'}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#4896FF',
            margin: 10,
            borderRadius: 20,
            paddingVertical: 10,
          }}
          onPress={handleApplication}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 15}}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Application;

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
