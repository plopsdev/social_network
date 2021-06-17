import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Button, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';
import PostCard from '../components/PostCard';
import { checkSubcription, followProfile } from '../services/fetchers';

const Profile = ({route, navigation}) => {
    const {userName, profilePicture, id} = route.params;
    const [posts, setPosts] = useState([])
    const {user} = useContext(AuthContext);
    const [isSubscribed, setSubscribed] = useState();

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

    const getUserPosts = async() => {
        // firestore().collection('user_post').where('userId', '==', '55raGbExIjrH2V3711O3').get().then(querySnapshot => { console.log(querySnapshot.data())})
        let snapshot = await firestore().collection('user_post').where('userId', '==', id).get()
        const postsList = []
        for(const doc of snapshot.docs){
            const {userId, message, picture, createdAt, likes} = doc.data();
            // console.log(picture)
            // const {userId, message, picture, createdAt, likes} = userPosts
            postsList.push({
                id: doc.id,
                user: {
                    id: id,
                    name: userName,
                    picture: profilePicture
                },
                createdAt,
                description: message,
                image: picture,
                liked: false,
                likes: likes,
            });
        }
        setPosts(postsList)

    }
    const onPressHandler = () => {
        followProfile(user.uid, id, isSubscribed)
        setSubscribed(true)
    }
    const checkSubcription = async (userId, userToFollowId) => {
        let snapshot = await firestore().collection('user_follower').where('userId', '==', userId ).where('profileId', '==', userToFollowId).get()
        if(snapshot.docs.length === 0){
            setSubscribed(false) 
        } else {
            setSubscribed(true) 
        }
    };

    useEffect(() => {
        checkSubcription(user.uid, id)
        getUserPosts()
    },[])

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
                {isSubscribed?(<Button title="Abonné"/>):(<Button title="S'abonner" onPress={onPressHandler} />)}
            </View>
            <View>
                <FlatList
                    data={posts}
                    keyExtractor={post => post.id}
                    renderItem={post => <PostCard post={post} navigation={navigation} />}
                    showsVerticalScrollIndicator={false}
                />
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

export default Profile
