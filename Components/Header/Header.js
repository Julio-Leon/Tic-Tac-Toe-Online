import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header({ XScore, MScore, tieScore }) {
    return (
        <View style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%'
        }}>
            <View>
                <Text style={textStyle.container}>X: {XScore}</Text>
            </View>
            <View>
                <Text style={textStyle.container}>Tie: {tieScore}</Text>
            </View>
            <View>
                <Text style={textStyle.container}>M: {MScore}</Text>
            </View>
        </View>
    )
}

const textStyle = StyleSheet.create({
    container: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'white'
    }
})
