import React, {useState} from 'react';
import {View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Research = () => {
  const [research, setResearch] = useState(null);

  const searchUser = async () => {
    let results = await firestore()
      .collection('user')
      .where('name', 'in', research)
      .limit(10)
      .get()
      .then();
  };

  return (
    <View>
      <Text>Research :)</Text>
    </View>
  );
};
export default Research;
