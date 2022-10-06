import { StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

function McqComp({data,setData,item}){
    return<View style={{flexDirection:'row'}}>
    <View style={{justifyContent:'center',alignItems:'center',marginHorizontal:3}}><TouchableOpacity onPress={()=>{
        alert(item)
    }}><AntDesign name={item===item?'checkcircleo':'checkcircle'} /></TouchableOpacity></View>
    <View><Text style={{fontSize:17}}>
     ans1</Text></View>
    
    
    </View>
}

const TheoriticalTest = () => {
    const [data,setData]=useState(false)
  return (
    <View style={{flex:1}}>
      <Text style={{textAlign:'center',fontSize:20}}>MCQ</Text>

<View style={{margin:20}}>
<Text style={{fontSize:18}}>1.Choose your answer?</Text>
{[1,2,3,4].map((item)=>{
    return<McqComp key={item} data={data} setData={setData} />
})}


</View>
    </View>
  )
}

export default TheoriticalTest

const styles = StyleSheet.create({})