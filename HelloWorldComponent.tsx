// HelloWorldComponent.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HelloWorldProps {
    textColor?: string;
}

const HelloWorldComponent: React.FC<HelloWorldProps> = ({ textColor = 'black' }) => {
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.helloWorldText, color: textColor }}>Hello, World Component!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    helloWorldText: {
        fontSize: 24,
        fontWeight: '600',
    },
});

export default HelloWorldComponent;
