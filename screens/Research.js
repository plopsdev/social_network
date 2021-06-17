import React, {useEffect, useState} from 'react';
import {Image, Text, Container,TextInput, StyleSheet, Content, FlatList, Header, Icon, Input, Item, ListItem, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Research = ({navigation}) => {
    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const searchUser = async textToSearch => {
        const list = [];
        await firestore()
        .collection('user')
        .where('name', '==', textToSearch)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
            const {description, email, name, picture} = doc.data();
            list.push({
                id: doc.id,
                name: name,
                description: description,
                email: email,
                picture: picture,
            });
            });
        });
        setResults(list);
    };
    const onPressHandler = (profile) => {
        console.log(profile)
        navigation.navigate('Profile', {
            userName: profile.name,
            profilePicture: profile.picture,
            id: profile.id
        });
    }

    useEffect(() => {
        searchUser(searchInput);
    }, [searchInput]);
    // console.log(results.length)
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Rechercher un utilisateur"
                onChangeText={text => setSearchInput(text)}
                placeholder="Cherchez un utilisateur"
            />
            <FlatList
                data={results}
                renderItem={({item}) => (
                    <View style = {styles.searchItemContainer} >
                        <Image style={styles.profilePicture} source={{uri: item.picture}} />
                        <Text onPress={() => onPressHandler(item)}>{item.name}</Text>
                    </View>
                )} 
            /> 
        </View>
    )
};

const styles = StyleSheet.create({
    searchItemContainer: {
        flexDirection: 'row'
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    }
})

export default Research;