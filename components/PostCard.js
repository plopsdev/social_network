import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const PostCard = (props) => {
    console.log(props.post?.item)
    const post = props.post?.item
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Image style = {styles.headerProfilePicture} source = {{uri: `${post?.user.picture}`}} />
                <Text style = {styles.headerUsername}>{post?.user.name}</Text>
            </View>
            <Image style = {styles.post} source = {{uri: `${post?.image}` }}/>
            <View style = {styles.descriptionContainer}>
                <View style = {styles.descriptionsButton}></View>
                <Text style = {styles.descriptionLikes}>{post?.likes} J'aime</Text>
                <Text style = {styles.descrptionUsername}>{post?.user.name}</Text>
                <Text style = {styles.descriptionText}>{post?.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    headerProfilePicture: {
        width: 40,
        height: 40,
        borderRadius: 40/2
    },
    headerUsername: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    post: {
        width: 400,
        height: 400
    },
    description: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    descriptionButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    descriptionLikes: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    descrptionUsername: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    descriptionText: {
        fontSize: 14
    }
})

export default PostCard