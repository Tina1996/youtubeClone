import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign,Ionicons,MaterialIcons} from '@expo/vector-icons'
import { useNavigation,useTheme } from '@react-navigation/native';
import Constant from 'expo-constants'
import {useDispatch, useSelector} from 'react-redux'

export default function Header() {
    const dispatch = useDispatch()
    const currentTheme = useSelector(state=>{
        return state.myDarkMode
    })
    const navigation = useNavigation()
    const {colors} = useTheme()
    const myColor = colors.iconColor
  return (
    <View style={{
        height:45,
        marginTop:Constant.statusBarHeight,
        backgroundColor:colors.headerColor,
        flexDirection:"row",
        justifyContent:"space-between",
        elevation:4
        }}>
        <View style={{
            flexDirection:"row",
            margin:5
            }}>
            <AntDesign style={{marginLeft:20}} name="youtube" size={32} color="red" />
            <Text style={{
                fontSize:22,
                marginLeft:5,
                fontWeight:"bold",
                color:myColor
                }}>YouTube</Text>
        </View>
        <View style={{
            flexDirection:"row",
            justifyContent:"space-around",
            width:150,
            marginTop:5
            }}>
            <Ionicons name="md-videocam" size={32} color={myColor} />
            <Ionicons name="md-search" size={32} color={myColor}
                onPress={()=>{navigation.navigate("search")}} />
            <MaterialIcons name="account-circle" size={32} color={myColor} 
                onPress={()=>{dispatch({type:"CHANGETHEME",payload:!currentTheme})}}
            />
        </View>
    </View>
  );
}

