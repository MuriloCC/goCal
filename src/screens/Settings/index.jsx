import React, { useState } from 'react';

import { Text, View, TextInput } from 'react-native';

import { GreenButton } from '../../components/GreenButton';

import { styles } from './styles';

export function Settings({ navigation }){
    const [name, setName] = useState('');
    
    const changePage = () => {
        navigation.navigate("Home", {
            name: name
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Para começar como podemos te chamar?</Text>
            <TextInput
                style={styles.input} 
                placeholder='Digite seu nome'
                onChangeText={text => setName(text)}
            />
            <GreenButton 
                title='Avançar'
                onPress={() => changePage()}
            />
        </View>
    );
}