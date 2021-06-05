import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, Button, FlatList } from 'react-native'
import PostCard from '../components/PostCard'
import { fetchProfilePosts } from '../services/fetchers'

//todo : trouver un truc plus élégant que à chaque fois avoir les infos user après avoir fetch, peut être gérer ca dans le fetcher

const Profile = ({route, navigation}) => {

    const [posts, setPosts] = useState([])
    const {userName, profilePicture, id} = route.params

    useEffect(() => {
        setPosts(fetchProfilePosts(id))
        // let postsTemp = posts

        // for (let post of postsTemp){
        //     post.user = {id: id, name: userName, picture: profilePicture}
        // }
        // setPosts(postsTemp)
        
    }, [])

    console.log(id)
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <View style = {styles.headerProfile}>
                    <Image style = {styles.headerProfilePicture} source = {{uri: `${profilePicture}`}}/>
                    <Text style = {styles.headerProfileName}>{userName}</Text>
                </View>
                <Button title="S'abonner"></Button>
            </View>
            <FlatList
                data = {posts}
                keyExtractor={post=>post.id}
                renderItem = {(post) => (
                    <PostCard 
                        post = {post}
                        navigation = {navigation}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    headerProfile: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    headerProfilePicture: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
    },
    headerProfileName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    
})

export default Profile