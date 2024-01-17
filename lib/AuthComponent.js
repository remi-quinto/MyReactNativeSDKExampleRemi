/* eslint-disable prettier/prettier */
// AuthComponent.js
import React from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import axios from 'axios';

export const AuthComponent = ({ onLogin }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        //Username and password are requied to login
        if (!username && password) {
            Alert.alert("Validation", "Please enter username and password");
        } else {
            //API Calling with Axios
            axios.post('Rest_Api_Url', {
                username: username,
                password: password,
            })
                .then(function (response) {

                    //Here you can handle the success case
                    console.log(response);
                })
                .catch(function (error) {
                    // Error handling
                    console.log(error);
                });

        }
    };

    return (
        <View>
            <Text>User Login</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};