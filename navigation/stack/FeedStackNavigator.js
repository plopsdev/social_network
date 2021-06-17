import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Feed from '../../screens/Feed';
import Profile from '../../screens/Profile';

const FeedStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default FeedStackNavigator;
