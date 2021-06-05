import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import SignUp from './screens/SignUp';
import User from './screens/User';
import fakeData from './FakeData';
import { DataContext } from './services/dataContext';
import TabNavigator from './navigation/TabNavigator';

//Fonction qui permettra de get les x derniers posts des gens que l'on suit. 
//Peut être gérer le fait de loader d'autres posts mais flemme



function App() {
    return(
        <DataContext.Provider value = {{
            posts: fakeData
        }}>
            <NavigationContainer>
                <TabNavigator/>
            </NavigationContainer>
        </DataContext.Provider>
    )
}

export default App;