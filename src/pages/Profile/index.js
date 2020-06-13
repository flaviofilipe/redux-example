import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import { useSelector } from 'react-redux';


export default function Profile() {
    const selector = useSelector(state => state);
    const { user } = selector.auth;

    return (
        <Container>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Age: {user.age}</Text>
            <Text>Token: {user.token}</Text>
        </Container>
    );
}
