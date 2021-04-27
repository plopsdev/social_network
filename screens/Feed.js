import React, {useContext} from 'react'
import { View, Text, FlatList } from 'react-native'
import PostCard from '../components/PostCard'
import { DataContext } from '../services/dataContext'

const Feed = ({navigation}) =>{
    const { posts } = useContext(DataContext)
    return(
        <View>
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
            <PostCard/>
        </View>
    )
}
export default Feed