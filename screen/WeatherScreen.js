import React from 'react';
import Weather from '../components/Weather'
import { View, StyleSheet } from 'react-native';

export default function WeatherScreen({route}) {
    return (
        <View style={style.Item}>
            <Weather zipCode={route.params.zipCode} />

        </View>
    );
   }
   const style = StyleSheet.create({
    Item:{
        flex: 1,
        fontSize: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
        
    },
})