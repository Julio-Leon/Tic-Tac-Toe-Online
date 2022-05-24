import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function ResetButton({ unsetGameMode }) {

    

    return (
        <TouchableOpacity style={{
            flex: 0.05,
            height: '10%',
            width: '30%',
            marginTop: 30,
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'solid',
            borderColor: 'white',
            borderWidth: 5,
            borderRadius: 10,
        }}
        onPress={unsetGameMode}
        >
            <Text style={{
                color: 'white'
            }}>Gamble your odds again</Text>
        </TouchableOpacity>
    )
}
