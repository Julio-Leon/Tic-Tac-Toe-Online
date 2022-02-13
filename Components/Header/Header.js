import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Table() {
    return (
        <View style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%'
        }}>
            <View>
                <Text style={textStyle.container}>X Score</Text>
            </View>
            <View>
                <Text style={textStyle.container}>Tie Score</Text>
            </View>
            <View>
                <Text style={textStyle.container}>M Score</Text>
            </View>
        </View>
    )
}

const textStyle = StyleSheet.create({
    container: {
        fontSize: 30,
        fontStyle: 'italic'
    }
})
