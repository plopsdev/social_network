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

    const getSubscribedPosts = async() => {
        let snapshot = await firestore().collection('user_follower').where('userId', '==', user.uid).get() //récupère tous les documents avec notre userId dedans
        const postsList = [];
        for (const doc of snapshot.docs){ //parcourt tous les profils auxquels on est abonné
            let snapshot = await firestore().collection('user_post').where('userId', '==', doc.data().profileId).get();
            for(const doc of snapshot.docs){ //parcourt tous les posts du profil en cours de boucle
                let like
                let likeSnapshot = await firestore().collection('post_like').where('postId', '==', doc.id).get()
                if(likeSnapshot.docs.length===0){
                    like=false
                }
                else {
                    like=true
                }
                const {userId, message, picture, createdAt, likes} = doc.data();
                let postUser = (await firestore().collection('user').doc(userId).get()).data()
                postsList.push({
                    id: doc.id,
                    user: {
                        id: userId,
                        name: postUser?(postUser.name) : ('user'),
                        picture: postUser?(postUser.picture) : ('https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png')
                    },
                    createdAt,
                    description: message,
                    image: picture,
                    liked: like,
                    likes: likes,
                });
            }
        }
        setPosts(postsList);
    }

    
    useEffect(() => {
        getSubscribedPosts();
    }, []);
    console.log(posts)
    const likePost = async (postId) => {
        firestore()
        .collection('post_like')
        .add({
            postId: postId,
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
                renderItem={post => <PostCard post={post} navigation={navigation} likePost = {likePost}/>}
                showsVerticalScrollIndicator={false}
                
            />
        </View>
    );
};
export default Feed;
