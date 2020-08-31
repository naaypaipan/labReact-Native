import React from 'react';
import { FlatList,View,Text } from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   const ZipItem = ({place, code,}) => (
    <View>
            <Text>{place}</Text>
            <Text>{code}</Text>
    </View>
    )
   const _keyExtractor = item => item.code
export default function ZipCodeScreen(){
    
    return (
    <View>
        <FlatList
            data={availableZipItems}
            keyExtractor={_keyExtractor}
             renderItem={({item}) => <ZipItem {...item} />}
    />

    </View>
    );
   
   }
   