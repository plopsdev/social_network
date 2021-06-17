import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import PostCard from '../components/PostCard';
import {
  Body,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Item,
  Left,
  ListItem,
  Thumbnail,
} from 'native-base';

const Research = ({navigation}) => {
  const [results, setResults] = useState(null);

  const searchUser = async textToSearch => {
    const list = [];
    await firestore()
      .collection('user')
      .where('name', '==', 'Paul')
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
    console.log('-------');
    console.log(results);
  };

  useEffect(() => {
    searchUser();
  }, []);

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="search" />
          <Input
            placeholder="Rechercher un utilisateur"
            onChangeText={text => searchUser(text)}
          />
        </Item>
      </Header>
      <Content>
        <FlatList
          data={results}
          keyExtractor={result => result.id}
          renderItem={({result}) => (
            <ListItem
              roundAvatar
              title={`${result.name}`}
              avatar={{uri: result.picture}}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
};
export default Research;
