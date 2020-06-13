/**
 * Routes authenticated
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoutes = () => (
    <NavigationContainer>
        <App.Navigator>
            <App.Screen name="Home" component={Home} />
            <App.Screen name="Profile" component={Profile} />
        </App.Navigator>
    </NavigationContainer>

);

export default AppRoutes;
