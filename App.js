import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Feed from './screens/Feed'
import CreatePost from './screens/CreatePost'
import Notifications from './screens/Notifications'
import Profile from './screens/Profile'
import Research from './screens/Research'
import SignUp from './screens/SignUp'
import User from './screens/User'
 

function App() {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name='Feed' component ={Feed}/>
                <Tab.Screen name='Notifications' component ={Notifications}/>
                <Tab.Screen name='Add' component={CreatePost}/>
                <Tab.Screen name='Profile' component={Profile}/>
                <Tab.Screen name='Research' component={Research}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default App;
