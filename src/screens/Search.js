import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,ScrollView,FlatList,ActivityIndicator} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'
import Constant from 'expo-constants'
import {useSelector,useDispatch} from 'react-redux'
import { useTheme } from '@react-navigation/native';

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyBUTInFy2gONZWFy0A6ASBaB54eNSNVThY

const SearchScreen = ({navigation}) => {

    const {colors} = useTheme()
    const myColor = colors.iconColor

    const [value,setValue] = useState("")
   
    // const [miniCardData,setMiniCardData] = useState("")
    const dispatch = useDispatch()
    const miniCardData = useSelector(state=>{
        return state.cardData
    })

    const [loading,setLoading] = useState(false)

    const fetchData = () => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBUTInFy2gONZWFy0A6ASBaB54eNSNVThY`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                setLoading(false)
                // setMiniCardData(data.items)
                dispatch({type:"ADD",payload:data.items})
            })
    }

    return(
        <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
            <View style={{padding:5,flexDirection:"row",justifyContent:"space-around",elevation:5,backgroundColor:colors.headerColor}}>
                <Ionicons style={{color:myColor}} name='md-arrow-back' size={32} onPress={()=>{navigation.goBack()}} />
                <TextInput 
                    style={{width:"70%",backgroundColor:"#e6e6e6"}}
                    value={value}
                    onChangeText={(text)=>{setValue(text)}}
                />
                <Ionicons style={{color:myColor}} name="md-send" size={32} onPress={()=>{fetchData()}} />
            </View>

            {loading ? 
                <ActivityIndicator  style={{marginTop:10}} size="large" color="red"/>
            :
                null
            }
            <FlatList 
                data={miniCardData}
                renderItem={({item})=>{
                    return  <MiniCard 
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item=>item.id.videoId}
            />
        </View>
    )
}

export default SearchScreen