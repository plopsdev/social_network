import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';

const Notifications = () => {
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const displayNotifications = async () => {
      // TODO: adapt to count and display notifications
      try {
        const list = [];
        await firestore()
          .collection('user_notifications')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const {userId, message, picture, createdAt, likes} = doc.data();
              list.push({
                id: doc.id,
                user: {
                  id: userId,
                  name: 'Test name',
                  picture:
                    'https://www.puttyandpaint.com/images/uploads/artistworks/18560/cache/foto_mago1__sized_center_m.jpg',
                },
                createdAt,
                message,
                picture,
                liked: false,
                likes,
              });
            });
          });
      } catch (e) {
        console.log(e);
      }
    };
    displayNotifications();
  }, []);

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
    <View>
      <Text>Notifications :)</Text>
    </View>
  );
};
export default Notifications;
