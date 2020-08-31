import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (

        <View  >
            <Text>{props.main}</Text>
            <View  >
            <Text >{props.description}</Text>
            </View>
                <View >
                    <Text>{props.temp}°C</Text>
                    <Text></Text>
                </View>
        </View>
    );
   }

   const style = StyleSheet.create({
    zipItem:{
        flex:2,
        
        flexDirection: 'row',
        justifyContent: 'space-evenly'
        
    },
    zipPlace:{
        flex:2,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    zipCode:{
        flex:1,
    }
})