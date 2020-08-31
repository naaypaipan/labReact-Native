import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (

        <View  >
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
                <View>
                    <Text>{props.temp}</Text>
                    <Text>°C</Text>
                </View>
        </View>
    );
   }

   const style = StyleSheet.create({
    zipItem:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace:{
        flex:1,
    },
    zipCode:{
        flex:1,
    }
})