import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Table({ squareId, currentPlayer, setCurrentPlayer, changePlayer, table, setTable, checkForWin }) {

    const [value, setValue] = useState('')

    const makeMove = () => {
        if (table[squareId] !== '') return

        setCurrentPlayer({
            id: currentPlayer.id,
            moves: [...currentPlayer.moves, squareId]
        })
        setValue(currentPlayer.id)
        changePlayer()

        const newTable = table.map((spot, i) => {
            return i === squareId ? currentPlayer.id : spot
        })

        setTable(newTable)

        checkForWin()
    }

    let styler = {
        flex: 1,
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    } 

    switch (squareId) {
        case 0:
            styler.borderRightWidth = 2
            styler.borderBottomWidth = 2
            styler.borderRightStyle = 'solid'
            styler.borderBottomStyle = 'solid'
            styler.borderRightColor = 'black'
            styler.borderBottomColor = 'black'
            break

        case 1:
            styler.borderLeftWidth = 2
            styler.borderRightWidth = 2
            styler.borderBottomWidth = 2
            styler.borderLeftStyle = 'solid'
            styler.borderRightStyle = 'solid'
            styler.borderBottomStyle = 'solid'
            styler.borderLeftColor = 'black'
            styler.borderRightColor = 'black'
            styler.borderBottomColor = 'black'
            break

        case 2:
            styler.borderLeftWidth = 2
            styler.borderBottomWidth = 2
            styler.borderLeftStyle = 'solid'
            styler.borderBottomStyle = 'solid'
            styler.borderLeftColor = 'black'
            styler.borderBottomColor = 'black'
            break

        case 3:
            styler.borderTopWidth = 2
            styler.borderRightWidth = 2
            styler.borderBottomWidth = 2
            styler.borderTopStyle = 'solid'
            styler.borderRightStyle = 'solid'
            styler.borderBottomStyle = 'solid'
            styler.borderTopColor = 'black'
            styler.borderRightColor = 'black'
            styler.borderBottomColor = 'black'
            break

        case 4:
            styler.borderWidth = 2
            styler.borderStyle = 'solid'
            styler.borderColor = 'black'
            break

        case 5:
            styler.borderTopWidth = 2
            styler.borderLeftWidth = 2
            styler.borderBottomWidth = 2
            styler.borderTopStyle = 'solid'
            styler.borderLeftStyle = 'solid'
            styler.borderBottomStyle = 'solid'
            styler.borderTopColor = 'black'
            styler.borderLeftColor = 'black'
            styler.borderBottomColor = 'black'
            break

        case 6:
            styler.borderRightWidth = 2
            styler.borderTopWidth = 2
            styler.borderRightStyle = 'solid'
            styler.borderTopStyle = 'solid'
            styler.borderRightColor = 'black'
            styler.borderTopColor = 'black'
            break

        case 7:
            styler.borderTopWidth = 2
            styler.borderRightWidth = 2
            styler.borderLeftWidth = 2
            styler.borderTopStyle = 'solid'
            styler.borderRightStyle = 'solid'
            styler.borderLeftStyle = 'solid'
            styler.borderTopColor = 'black'
            styler.borderRightColor = 'black'
            styler.borderLeftColor = 'black'
            break

        case 8:
            styler.borderLeftWidth = 2
            styler.borderTopWidth = 2
            styler.borderLeftStyle = 'solid'
            styler.borderTopStyle = 'solid'
            styler.borderLeftColor = 'black'
            styler.borderTopColor = 'black'
            break
    }

    

    return (
        <TouchableOpacity 
            style={styler}
            onPress={makeMove}
        >
            <Text
                style={{
                    fontSize: 50
                }}
            >
                {table[squareId]}
            </Text>
        </TouchableOpacity>
    )
}
