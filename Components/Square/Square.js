import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Table({ squareId, currentPlayer, setCurrentPlayer, changePlayer }) {

    const [value, setValue] = useState('')
    const [used, setUsed] = useState(false)

    const makeMove = () => {
        if (used) return

        setCurrentPlayer({
            id: currentPlayer.id,
            moves: [...currentPlayer.moves, squareId]
        })
        setValue(currentPlayer.id)
        changePlayer()
        setUsed(true)
    }

    const colorPicker = [
        'powderblue',
        'skyblue',
        'steelblue',
        'lightsalmon',
        'lightpink',
        'mistyrose',
        '#00fa9a',
        '#7b68ee',
        '#4169e1'
      ]

    return (
        <TouchableOpacity 
            style={{
                flex: 1,
                backgroundColor: colorPicker[squareId],
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={makeMove}
        >
            <Text
                style={{
                    fontSize: 50
                }}
            >
                {value}
            </Text>
        </TouchableOpacity>
    )
}
