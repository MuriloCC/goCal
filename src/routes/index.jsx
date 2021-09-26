import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { Home } from '../screens/Home';
import { Results } from '../screens/Results';
import { Settings } from '../screens/Settings';

const { Navigator, Screen } = createStackNavigator();

export function Routes(){
    return(
        <NavigationContainer>
            <Navigator 
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }   
                }} 
            initialRouteName="Settings"
            >
                <Screen name="Settings" component={Settings} />
                <Screen name="Home" component={Home} />
                <Screen name="Results" component={Results} />
            </Navigator>
        </NavigationContainer>
    )  
}