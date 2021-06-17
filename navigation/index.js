import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {AuthProvider} from './AuthProvider';
import Routes from './Routes';
import TabNavigator from './TabNavigator';

const Providers = () => {
    return (
        // <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        //</NavigationContainer> 
    );
};

export default Providers;
