/**
 * Routes no authenticated
 */


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from '../pages/Auth';

const App = createStackNavigator();

const AuthRoutes = () => (
    <NavigationContainer>
        <App.Navigator>
            <App.Screen name="Auth" component={Auth} />
        </App.Navigator>
    </NavigationContainer>

);

export default AuthRoutes;
