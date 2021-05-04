import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens/MainScreen';
import {AboutScreen} from '../screens/AboutScreen';
import {PostScreen} from '../screens/PostScreen';
import {CreateScreen} from '../screens/CreateScreen';
import {THEME} from '../theme';
import {Platform} from 'react-native';

const Stack = createStackNavigator()

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main' screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
            }}>
                <Stack.Screen name='Main' component={MainScreen} options={{headerTitle: 'My Blog'}}/>
                <Stack.Screen name='About' component={AboutScreen}/>
                <Stack.Screen name='Create' component={CreateScreen}/>
                <Stack.Screen name='Post' component={PostScreen}
                              options={({route}) => ({headerTitle: `Post from ${new Date(route.params.date).toLocaleDateString()}`})}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
