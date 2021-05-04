import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens/MainScreen';
import {AboutScreen} from '../screens/AboutScreen';
import {PostScreen} from '../screens/PostScreen';
import {CreateScreen} from '../screens/CreateScreen';

const Stack = createStackNavigator()

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen name='Main' component={MainScreen}/>
                <Stack.Screen name='About' component={AboutScreen}/>
                <Stack.Screen name='Create' component={CreateScreen}/>
                <Stack.Screen name='Post' component={PostScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
