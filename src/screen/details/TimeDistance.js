import React from "react"
import {View,Text,Image,StyleSheet} from 'react-native'
import { FontSize } from "../../constants/Fonts";

const TimeDistanceItem =(props)=>{
    const {icon,title} = props;
    return(
      <View style={Styles.container}>
       <Image source={icon}/>
       <Text style={Styles.title}>{title}</Text>
      </View>
    )
  }

  const Styles=StyleSheet.create({
    container:{
        alignItems:'center',
    },
    title:{
        color:'gray',
        fontSize:FontSize.t2,
        marginTop:3
    }
  })

  export default TimeDistanceItem