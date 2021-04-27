import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

import CreatePost from '../screens/CreatePost';
import Notifications from '../screens/Notifications';
import Research from '../screens/Research';
import feedStackNavigator from './stack/feedStackNavigator';
import User from '../screens/User';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator initialRouteName='Feed'>
            <Tab.Screen name='Feed' component={feedStackNavigator} options={{
                tabBarIcon: ({color}) => (
                    <Icon name='home' size={25} color={color}/>
                )
            }}/>
            <Tab.Screen name='Notifications' component ={Notifications} options={{
                tabBarIcon: ({color}) => (
                    <Icon name='bell' size={25} color={color}/>
                )
            }}/>
            <Tab.Screen name='Add' component={CreatePost} options={{
                tabBarIcon: ({color}) => (
                    <Icon name='plus' size={25} color={color}/>
                )
            }}/>
            <Tab.Screen name='User' component={User} options={{
                tabBarIcon: ({color}) => (
                    <Icon name='user' size={25} color={color}/>
                )
            }}/>
            <Tab.Screen name='Research' component={Research} options={{
                tabBarIcon: ({color}) => (
                    <Icon name='search' size={25} color={color}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default TabNavigator