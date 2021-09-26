import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function GreenButton(props){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={props.activeOpacity}
            onPress={props.onPress}
        > 
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
}