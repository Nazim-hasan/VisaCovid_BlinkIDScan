import * as React from 'react';

import {TouchableOpacity, StyleSheet, View, Text, Button} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import NID from '../../assets/images/face.png';

const FaceScan = props => {
  return (
    <View style={styles.container}>
      {/* <View>
        <Text>face id scan Contents</Text>
        <Button
          title="Registration"
          onPress={() => props.navigation.navigate('RegistrationForm')}
        />
      </View> */}

      <Text style={styles.nidComment}>
        Place your face to take a clear photo
      </Text>
      <Card style={{marginTop: 30, marginBottom: 365, width: '90%'}}>
        <Card.Cover style={styles.personNID} source={NID} />
        <Card.Actions style={styles.nidActions}>
          <TouchableOpacity>
            <Button labelStyle={{fontSize: 35}} icon="camera" title="camera" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              labelStyle={{fontSize: 35}}
              icon="camera-retake-outline"
              title="retake"
            />
          </TouchableOpacity>
        </Card.Actions>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate('Registration Form');
            }}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5FCFF',
  },
  nidComment: {
    color: 'gray',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  personNID: {
    height: 210,
    width: 320,
  },
  nidActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#2a24c9',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '70%',
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default FaceScan;
