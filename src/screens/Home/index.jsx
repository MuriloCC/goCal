import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { GreenButton } from '../../components/GreenButton';
import { WhiteButton } from '../../components/WhiteButton';
import { styles } from './styles';

export function Home({ route, navigation }){
    const { name } = route.params
    const changePage = () => {
        navigation.navigate("Results");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá,</Text>
            <Text style={styles.name}>{name}</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Vamos calcular o seu gasto energético basal!</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Seu sexo"
                />
                <TextInput
                    style={styles.input} 
                    placeholder="Sua idade"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Seu peso"
                />
                <TextInput
                    style={styles.input} 
                    placeholder="Seu nível de atividade física"
                />
            </View>

            <GreenButton
                title="Calcular" 
                activeOpacity={0.7}
                onPress={() => changePage()}
            />
            <WhiteButton 
                title="Voltar"
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </View>
    );
}