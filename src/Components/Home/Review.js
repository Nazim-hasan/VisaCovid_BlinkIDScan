import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Modal from 'react-native-modal';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import vector from '../../../assets/updated/vector.jpg'

const Review = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={vector} style={{ height: 200, width: 200, resizeMode: 'contain', }} />
      </View>

      <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: '#096FF2', margin: 10, padding: 10, borderRadius: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Give us Rating</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ height: 300, backgroundColor: 'white', position: 'relative', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>Thank You</Text>
            <Rating
              showRating
              // onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
            <TouchableOpacity onPress={toggleModal} style={{ position: 'absolute', bottom: 0, left: '40%', backgroundColor: '#096FF2', margin: 10, padding: 10, borderRadius: 10 }}>
              <Text style={{ color: 'white' }}>Submit</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({});
