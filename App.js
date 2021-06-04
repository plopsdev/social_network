import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SignUp from './screens/SignUp';
import User from './screens/User';
import fakeData from './FakeData';
import {DataContext} from './services/dataContext';
import TabNavigator from './navigation/TabNavigator';
import Providers from './navigation';

const App = () => {
  return <Providers />;
};

export default App;
