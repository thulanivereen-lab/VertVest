import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DiscoveryScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Discovery Screen</Text>
            <Text style={styles.subtext}>Coming soon</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
    },
    subtext: {
        fontSize: 14,
        color: '#787774',
        marginTop: 8,
    },
});

export default DiscoveryScreen;
