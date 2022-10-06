import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

import Scan from '../Home/Scan';
import Notification from '../Home/Notification';
import UserProfile from '../Home/UserProfile';
import Icons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '../Home/Dashboard';
import MainDashboard from '../Home/MainDashboard';
import Review from '../Home/Review';
import Application from '../Home/Application';

const Tab = createBottomTabNavigator();

const NavigationTab = (props) => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
                {/* <Tab.Screen name="Dasboard" component={Dashboard}
                    options={{
                        tabBarIcon: ({color, size}) =>(
                            <Icons name="home" color={color} size={size} 
                                onPress={() =>
                                    props.navigation.navigate("Home")
                                } />
                        )}}
                /> */}


                <Tab.Screen name="Dashboard" component={MainDashboard} 
                    options={{
                        tabBarIcon: ({color, size}) =>(
                            <Icons name="home" color={color} size={size}
                                onPress={() =>
                                    props.navigation.navigate("Dashboard")
                                }
                        />
                        ) }}
                />
                {/* <Tab.Screen name="Application" component={Scan} 
                    options={{
                        tabBarIcon: ({color, size}) =>(
                            <Icons name="grid" color={color} size={size}
                                onPress={() =>
                                    props.navigation.navigate("Scan")
                                }
                        />
                        ) }}
                /> */}

                <Tab.Screen name="Application" component={Application} 
                    options={{
                        tabBarIcon: ({color, size}) =>(
                            <Icons  name="grid" color={color} size={size}
                                onPress={() =>
                                    props.navigation.navigate("Application")
                                }
                            />
                        ) }}
                />


                    <Tab.Screen name="Review" component={Review} 
                    options={{
                        tabBarIcon: ({color, size}) =>(
                            <MaterialIcons name="preview" color={color} size={size}
                                onPress={() =>
                                    props.navigation.navigate("Review")
                                }
                            />
                        ) }}
                />
                <Tab.Screen name="Notification" component={Notification} 
                    options={{
                        tabBarIcon: ({color, size}) =>(
                            <Icons name="notifications" color={color} size={size}
                                onPress={() =>
                                    props.navigation.navigate("Notification")
                                }
                            />
                        ) }}
                />
                
                <Tab.Screen name="Profile" component={UserProfile} 
                    options={{
                        tabBarIcon: ({color, size}) =>(
                            <Icons name="person" color={color} size={size} 
                                onPress={() =>
                                    props.navigation.navigate("Profile")
                                }
                            />
                        )
                    }}
                />
        </Tab.Navigator>
    )
}

export default NavigationTab;
