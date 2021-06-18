import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const PostCard = props => {
  const post = props.post?.item;
  const [isLiked, setLiked] = useState(post?.liked);
  const [likes, setLikes] = useState(post?.likes);
  const onPressHandler = () => {
    props.navigation.navigate('Profile', {
      userName: post?.user.name,
      profilePicture: post?.user.picture,
      id: post?.user.id,
    });
  };
  const onLikeHandler = () => {
    if (isLiked) {
      setLikes(likes - 1);
      props.dislikePost(post);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      props.likePost(post);
      setLiked(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerProfilePicture}
          source={{uri: post?.user.picture}}
        />
        <Text style={styles.headerUsername} onPress={onPressHandler}>
          {post?.user.name}
        </Text>
      </View>
      <View style={styles.postView}>
        <Image style={styles.post} source={{uri: post?.image}} />
      </View>
      <View style={styles.description}>
        <View style={styles.likesContainer}>
          <Icon
            name="heart"
            size={25}
            color={isLiked ? '#D60000' : '#A5A8AC'}
            onPress={onLikeHandler}
          />
          <Text style={styles.descriptionLikes}>{likes} J'aime</Text>
        </View>
        <Text style={styles.descriptionUsername} onPress={onPressHandler}>
          {post?.user.name}
        </Text>
        <Text style={styles.descriptionText}>{post?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 12,
    marginVertical: 8,
    backgroundColor: '#e1e1e1',
  },
  postView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginVertical: 12,
    marginHorizontal: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerProfilePicture: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  headerUsername: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  post: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
  },
  description: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 12,
  },
  descriptionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  descriptionLikes: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 6,
  },
  descriptionUsername: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
  },
});

export default PostCard;
