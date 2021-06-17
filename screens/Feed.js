import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import PostCard from '../components/PostCard';
import {DataContext} from '../services/dataContext';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';

const Feed = ({navigation}) => {
    const {user} = useContext(AuthContext);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)
    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const list = [];
            await firestore()
            .collection('user_post')
            .get()
            .then(querySnapshot => {
                // console.log('Total Posts: ', querySnapshot.size);
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
                    description: message,
                    image: picture,
                    liked: false,
                    likes: likes,
                });
                });
            });
            setPosts(list);

            if (loading) {
            setLoading(false);
            }

            // console.log('Posts : ', list);
        } catch (e) {
            console.log(e);
        }
        };
        fetchPosts();
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
        <FlatList
            data={posts}
            keyExtractor={post => post.id}
            renderItem={post => <PostCard post={post} navigation={navigation} />}
            showsVerticalScrollIndicator={false}
        />
        <PostCard />
        </View>
    );
};
export default Feed;
