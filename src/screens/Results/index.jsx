import React from 'react';
import { View, Text } from 'react-native';
import { GreenButton } from '../../components/GreenButton';
import { styles } from './styles';

export function Results({ navigation }){
    const changePage = () => {
        navigation.navigate("Settings")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Aqui está o seu</Text>
            <Text style={styles.result}>resultado</Text>

            <View style={styles.resultView}>
                <Text style={styles.subTitle}>Seu metabolismo basal é de: </Text>
                <Text style={styles.cal}>????</Text>

                <Text style={styles.subTitle}>Para manter seu peso você precisa consumir em média:</Text>
                <Text style={styles.cal}>????</Text>

                <Text style={styles.subTitle}>Para perder peso você precisa consumir em média: </Text>
                <Text style={styles.cal}>????</Text>

                <Text style={styles.subTitle}>Para ganhar peso você precisa consumir em média: </Text>
                <Text style={styles.cal}>????</Text>
            </View>

            <GreenButton 
                title="Reiniciar"
                activeOpacity={0.7}
                onPress={() => {changePage()}}
            />
        </View>
    );
}