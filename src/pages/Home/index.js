import React from 'react';
import { Text, Button } from 'react-native';

import { Container } from './styles';
import { useSelector } from 'react-redux';


export default function Home({ navigation }) {
    const selector = useSelector(state => state);
    const { user } = selector.auth;
    console.log(user);

    return (
        <Container>
            <Text>Welcome {user.name}</Text>
            <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        </Container>
    );
}
