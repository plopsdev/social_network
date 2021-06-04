import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';

const Profile = ({route}) => {
  const {userName, profilePicture, id} = route.params;
  const {user} = useContext(AuthContext);

  const followProfile = async () => {
    firestore()
      .collection('user_follower')
      .add({
        profileId: id,
        userId: user.uid,
      })
      .then(() => {
        console.log('Profile followed !');
      })
      .catch(error => {
        console.log('Something went wrong with following profile.');
      });
  };

  const likePost = async post => {
    firestore()
      .collection('post_like')
      .add({
        postId: post.id,
        userId: user.uid,
      })
      .then(() => {
        console.log('Post liked !');
      })
      .catch(error => {
        console.log('Something went wrong with liking post.');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerProfile}>
          <Image
            style={styles.headerProfilePicture}
            source={{uri: `${profilePicture}`}}
          />
          <Text style={styles.headerProfileName}>{userName}</Text>
        </View>
        <Button title="S'abonner" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerProfile: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerProfilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  headerProfileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profile;
