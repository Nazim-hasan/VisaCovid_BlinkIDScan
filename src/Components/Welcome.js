import React, {useState} from 'react';
import logo from '../../assets/updated/appLogo.png';
import background from '../../assets/updated/appLogo.png';

import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Welcome = (props) => {

         return (
             <View style={styles.container}>
                 <View>
                     <TouchableOpacity onPress={() =>{
                         props.navigation.navigate("Login")
                     }}>
                         <Image style={styles.logo}
                                source={logo}
                         />
                         
                     </TouchableOpacity>
                 </View>
             </View>
         );
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
   },
   logo:{
    height:200,
    width:200,
    resizeMode:'contain'
   }

//    background:{
//        width: '100%',
//        height: 450,

//    }
})
export default Welcome;
