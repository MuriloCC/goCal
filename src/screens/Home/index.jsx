import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { GreenButton } from '../../components/GreenButton';
import { WhiteButton } from '../../components/WhiteButton';
import { styles } from './styles';

export function Home({ route, navigation }){
    const { name } = route.params;
    
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [activities, setActivities] = useState('');

    let tmb;

    function calc(){
        if(sex === 'Masculino'){
            tmb = 66 + (13.7 * weight) + (5 * activities) - (6.8 * age);
        }
    }

    function changePage(){
        navigation.navigate("Results", {
            tmb: tmb
        });
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
                    onChangeText={text => setSex(text)}
                />
                <TextInput
                    style={styles.input} 
                    placeholder="Sua idade"
                    value={age}
                    onChangeText={text => setAge(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Seu peso"
                    onChangeText={text => setWeight(text)}
                />
                <TextInput
                    style={styles.input} 
                    placeholder="Seu nível de atividade física"
                    onChangeText={text => setActivities(text)}
                />
            </View>

            <GreenButton
                title="Calcular" 
                activeOpacity={0.7}
                onPress={() => {
                    calc();
                    changePage();
                }}
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