import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

const Profile = ({route}) => {
    const {userName, profilePicture, id} = route.params

    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <View style = {styles.headerProfile}>
                    <Image style = {styles.headerProfilePicture} source = {{uri: `${profilePicture}`}}/>
                    <Text style = {styles.headerProfileName}>{userName}</Text>
                </View>
                <Button title="S'abonner"></Button>
            </View>
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