import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MainDashboard = () => {
  return (
    <View style={{ flex: 1 }}>
    <SafeAreaView>
      <ScrollView>

        <TouchableOpacity style={styles.cardStyle}>
    
          <Text style={{ fontSize: 18 }}>Assessment</Text>
          <Text style={{ fontSize: 28, color: '#3780FC', fontWeight: 'bold' }}>1</Text>
          <Text style={{ fontSize: 15, color: '#3780FC', fontWeight: 'bold' }}>Total Assessment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardStyle}>
        {/* <MaterialIcons name='assessment' size={40} color={'#3780FC'} /> */}
          <Text style={{ fontSize: 18 }}>Cirtificate Summery</Text>
          <Text style={{ fontSize: 28, color: 'green', fontWeight: 'bold' }}>0</Text>
          <Text style={{ fontSize: 15, color: 'green', fontWeight: 'bold' }}>Cirtificate Issued</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.cardStyle}>
          <Text style={{ fontSize: 18 }}>Upcomming Assessment</Text>
          <Text style={{ fontSize: 23, color: '#ffaa00', fontWeight: 'bold' }}>19-09-2022</Text>

        </TouchableOpacity>



        <View style={{backgroundColor:'#4F50EC', margin:10,paddingVertical:10}}>
          <Text style={{textAlign:'center',color:'white'}}>Assessment History</Text>
        </View>
{[1,2,3].map((item)=>{
  return   <View key={String(item)} style={styles.cardStyleHistory}>
        <View style={{position:'absolute',top:10,right:10}}>
            <TouchableOpacity style={{backgroundColor:'#ffaa00',padding:3,borderRadius:10}}>
        <Text style={{color:'black',fontSize:12}}>Status</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <Text style={{color:'gray'}}>Institute:- </Text>
            <Text style={{marginHorizontal:10}}>Aman Istitute for Vocational Training</Text>
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <Text style={{color:'gray'}}>Trade:- </Text>
            <Text style={{marginHorizontal:10}}>Building Electrican</Text>
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <Text style={{color:'gray'}}>Apply Date:-  </Text>
            <Text style={{marginHorizontal:10}}>Sep 19,2022</Text>
          </View>
          <View style={{margin:20}}>
            <TouchableOpacity style={{backgroundColor:'#23C1C2',padding:10,borderRadius:10,}}>
        <Text style={{color:'black',fontSize:12,textAlign:'center'}}>Action</Text>
            </TouchableOpacity>
          </View>
        </View>
})}

     

      </ScrollView>
      </SafeAreaView>
    </View>

  )
}

export default MainDashboard

const styles = StyleSheet.create({

  cardStyle: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingVertical: 20, borderRadius: 10,
    height: 200,
    marginVertical: 5,
    marginHorizontal: 20


  },
  cardStyleHistory: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white', paddingVertical: 20, borderRadius: 10,
    height: 200,
    marginVertical: 5,
    marginHorizontal: 20,
    position:'relative',


  }

})