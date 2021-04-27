import React, {useState} from 'react'
import { View, Text, Button, Image, StyleSheet, TextInput } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreatePost = () => {
    const [response, setResponse] = useState(null)
    const [description, setDescription] = useState('')
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.description}
                onChangeText={setDescription}
                value={description}
            />
            {response &&(<Image source = {{uri: `${response.uri}`}} style={styles.picture} />)}
            <View style = {styles.pictureButtons}>
                <Button title='Gallerie' style = {styles.button}  onPress={() => {
                    launchImageLibrary({mediaType: 'photo'}, (response) => {
                        setResponse(response)
                    })
                }} />
                <Button title='Prendre une photo' style = {styles.button} onPress={() => {
                    launchCamera({mediaType: 'photo'}, (response) => {
                        setResponse(response)
                    })
                }} />
            </View>
            <Button title='Poster'/>
            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 12
    },
    description: {
        height: 80,
        borderWidth: 1,
    },
    picture: {
        marginTop: 12,
        width:368,
        height: 368
    },
    pictureButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    button: {
        height: 40,
        margin: 10
    }
})

export default CreatePost