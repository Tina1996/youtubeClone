import React from 'react';
import { StyleSheet, Text, View ,ScrollView,FlatList} from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from 'react-redux'



const LittleCard = ({name}) => {
        //we mostly write props in parenthesis, so that we can use it as props.name
        // or instead we can destructure props and write {name} and directly use name

    return(
        <View style={{
            backgroundColor:"red",
            width:170,
            height:50,
            borderRadius:4,
            marginTop:10,
            justifyContent:"space-around"
        }}>
            <Text style={{
                textAlign:"center",
                color:"white",
                marginTop:5,
                fontSize:22
            }}>{name}</Text>
        </View>
    )
}

const Explore = () => {

    const cardData = useSelector(state=>{
        return state.cardData
    })

    return(
        <View style={{flex:1}}>
            <Header />
            {/* <ScrollView> */}
            <View style={{
                flexDirection:"row",
                justifyContent:"space-around",
                flexWrap:"wrap"
                }}>
                <LittleCard name="Gaming"/>
                <LittleCard name="Trending"/>
                <LittleCard name="Music"/>
                <LittleCard name="News"/>
                <LittleCard name="Movies"/>
                <LittleCard name="Fashion"/>
            </View>
            <Text style={{margin:8,
                fontSize:22,
                borderBottomWidth:1
            }}>
                Trending Videps
            </Text>
            <FlatList 
                data={cardData}
                renderItem = {({item})=>{
                return <Card 
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item=>item.id.videoId}
                />
                {/* </ScrollView> */}
        </View>
    )
}

export default Explore

