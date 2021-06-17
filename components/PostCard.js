import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const PostCard = props => {

    
    const post = props.post?.item;
    const [isLiked, setLiked] = useState(post?.liked)
    const onPressHandler = () => {
        props.navigation.navigate('Profile', {
        userName: post?.user.name,
        profilePicture: post?.user.picture,
        id: post?.user.id,
        });
    };
    const onLikeHandler = () => {
        if (isLiked){
            setLiked(false)
        }
        else {
            props.likePost(post?.id)
            setLiked(true)
        }      
    }

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
            <Image style={styles.post} source={{uri: post?.image}} />
            <View style={styles.descriptionContainer}>
                <View style={styles.likesContainer}>
                    <Icon name="heart" size={25} color={isLiked?('#D60000'):('#A5A8AC')} onPress={onLikeHandler} />
                    <Text style={styles.descriptionLikes}>{post?.likes} J'aime</Text>
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
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    headerProfilePicture: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },
    headerUsername: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    post: {
        width: 400,
        height: 400,
    },
    description: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    descriptionButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    descriptionContainer: {
        flexDirection: 'column'
    },
    likesContainer: {
        flexDirection: 'row'
    },
    descriptionLikes: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
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
