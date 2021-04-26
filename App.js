import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome'


import Feed from './screens/Feed'
import CreatePost from './screens/CreatePost'
import Notifications from './screens/Notifications'
import Profile from './screens/Profile'
import Research from './screens/Research'
import SignUp from './screens/SignUp'
import User from './screens/User'
import fakeData from './FakeData'
import { DataContext } from './services/dataContext'



function App() {
    const Tab = createBottomTabNavigator();

    return(
        <DataContext.Provider value = {{
            posts: fakeData
        }}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName='Feed'>
                    <Tab.Screen name='Feed' component={Feed} options={{
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
                    <Tab.Screen name='Profile' component={Profile} options={{
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
            </NavigationContainer>
        </DataContext.Provider>
    )
}

export default App;
