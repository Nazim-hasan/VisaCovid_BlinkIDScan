import * as React from 'react';
import {ScrollView} from 'react-native';
import {Dimensions} from 'react-native';

import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';
import NIDSample from '../../assets/images/NID-sample.jpg';
var {width} = Dimensions.get('window');

const NidInformation = props => {
  return (
    <View style={styles.container}>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={200}
        y>
        <View>
          <View style={styles.container}>
            <Text style={{textAlign: 'center', fontSize: 20, marginTop: 10}}>
              Information from NID
            </Text>
            <View style={styles.thumbContainer}>
              <Image
                style={styles.thumbnail}
                source={NIDSample}
                resizeMode={'center'}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.informationField}>
            <Text style={styles.contentText}>Name: </Text>
            <Text style={styles.contentText2}>Yeasmin Rahaman</Text>
          </View>
          <View style={styles.informationField}>
            <Text style={styles.contentText}>Father's Name: </Text>
            <Text style={styles.contentText2}>Mr X</Text>
          </View>
          <View style={styles.informationField}>
            <Text style={styles.contentText}>Mother's Name: </Text>
            <Text style={styles.contentText2}>Mr Y</Text>
          </View>
          <View style={styles.informationField}>
            <Text style={styles.contentText}>Date of Birth: </Text>
            <Text style={styles.contentText2}>18 Nov 1976</Text>
          </View>
          <View style={styles.informationField}>
            <Text style={styles.contentText}>Place of Birth: </Text>
            <Text style={styles.contentText2}>Dhaka</Text>
          </View>
          <View style={styles.informationField}>
            <Text style={styles.contentText}>Issue Date: </Text>
            <Text style={styles.contentText2}>01 Apr 2015</Text>
          </View>
          <View style={styles.informationField}>
            <Text style={styles.contentText}>Blood Date: </Text>
            <Text style={styles.contentText2}>A +</Text>
          </View>
          <View style={styles.informationField}>
            <Text style={styles.contentText}>Present Address: </Text>
            <Text style={styles.contentText2}>
              {`             EA 10/1 House: 119, 
              Road No: 21, Block K`}
            </Text>
          </View>
          <View style={styles.informationField}>
            <Text style={styles.contentText}>Permanent Address: </Text>
            <Text style={styles.contentText2}>
              {`           Molla Bari ,House: 206,
              Road No: 18, Block G`}
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainerNext}>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => {
              props.navigation.navigate('Face Scan');
            }}>
            <Text style={styles.textNext}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F5FCFF',
  },

  nidActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextBtn: {
    width: '80%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
    marginBottom: 10,
    backgroundColor: '#021078',
  },
  textNext: {
    color: '#ffffff',
  },
  thumbContainer: {
    width: '100%',
    height: 400,
    marginVertical: -20,
  },
  thumbnail: {
    flex: 1,
    width: width,
    height: 100,
  },
  informationField: {
    marginHorizontal: 35,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 16,
    fontWeight: '300',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
});
export default NidInformation;
