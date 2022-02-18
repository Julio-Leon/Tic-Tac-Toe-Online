import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Table({ block, i, j, currentPlayer, changePlayer, table, setTable, checkForWin, playerXMoves, setPlayerXMoves, playerMMoves, setPlayerMMoves }) {

    const pos = [i, j]

    const makeMove = () => {
        if (block !== '') return

        const newTable = table.map((newRow, ii) => {
            return newRow.map((newBlock, jj) => {
                return i === ii && j === jj ? currentPlayer : newBlock
            })
        })

        if (currentPlayer === 'X') {
            console.log('x moved')
        }

        setTable(newTable)
        changePlayer()
        checkForWin()
    }

    let styler = {
        flex: 1,
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    } 

    // Top Row
    if (pos[0] === 0 && pos[1] === 0) {
        styler.borderRightWidth = 2
        styler.borderBottomWidth = 2
        styler.borderRightStyle = 'solid'
        styler.borderBottomStyle = 'solid'
        styler.borderRightColor = 'black'
        styler.borderBottomColor = 'black'
    } else if (pos[0] === 0 && pos[1] === 1) {
        styler.borderLeftWidth = 2
        styler.borderRightWidth = 2
        styler.borderBottomWidth = 2
        styler.borderLeftStyle = 'solid'
        styler.borderRightStyle = 'solid'
        styler.borderBottomStyle = 'solid'
        styler.borderLeftColor = 'black'
        styler.borderRightColor = 'black'
        styler.borderBottomColor = 'black'
    } else if (pos[0] === 0 && pos[1] === 2) {
        styler.borderLeftWidth = 2
        styler.borderBottomWidth = 2
        styler.borderLeftStyle = 'solid'
        styler.borderBottomStyle = 'solid'
        styler.borderLeftColor = 'black'
        styler.borderBottomColor = 'black'

    // Middle Row 
    } else if (pos[0] === 1 && pos[1] === 0) {
        styler.borderTopWidth = 2
        styler.borderRightWidth = 2
        styler.borderBottomWidth = 2
        styler.borderTopStyle = 'solid'
        styler.borderRightStyle = 'solid'
        styler.borderBottomStyle = 'solid'
        styler.borderTopColor = 'black'
        styler.borderRightColor = 'black'
        styler.borderBottomColor = 'black'
    } else if (pos[0] === 1 && pos[1] === 1) {
        styler.borderWidth = 2
        styler.borderStyle = 'solid'
        styler.borderColor = 'black'
    } else if (pos[0] === 1 && pos[1] === 2) {
        styler.borderTopWidth = 2
        styler.borderLeftWidth = 2
        styler.borderBottomWidth = 2
        styler.borderTopStyle = 'solid'
        styler.borderLeftStyle = 'solid'
        styler.borderBottomStyle = 'solid'
        styler.borderTopColor = 'black'
        styler.borderLeftColor = 'black'
        styler.borderBottomColor = 'black'

    // Bottom Row
    } else if (pos[0] === 2 && pos[1] === 0) {
        styler.borderRightWidth = 2
        styler.borderTopWidth = 2
        styler.borderRightStyle = 'solid'
        styler.borderTopStyle = 'solid'
        styler.borderRightColor = 'black'
        styler.borderTopColor = 'black'
    } else if (pos[0] === 2 && pos[1] === 1) {
        styler.borderTopWidth = 2
        styler.borderRightWidth = 2
        styler.borderLeftWidth = 2
        styler.borderTopStyle = 'solid'
        styler.borderRightStyle = 'solid'
        styler.borderLeftStyle = 'solid'
        styler.borderTopColor = 'black'
        styler.borderRightColor = 'black'
        styler.borderLeftColor = 'black'
    } else if (pos[0] === 2 && pos[1] === 2) {
        styler.borderLeftWidth = 2
        styler.borderTopWidth = 2
        styler.borderLeftStyle = 'solid'
        styler.borderTopStyle = 'solid'
        styler.borderLeftColor = 'black'
        styler.borderTopColor = 'black'
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
                {block}
            </Text>
        </TouchableOpacity>
    )
}
