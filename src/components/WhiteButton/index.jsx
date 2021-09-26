import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../WhiteButton/styles';

export function WhiteButton(props){
    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={props.onPress}
        >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>


    );
}