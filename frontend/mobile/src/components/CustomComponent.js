import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomComponent = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomComponent;
