import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Table({ block, i, j, makeMove, playerWon, makingMove, setMakingMove }) {

    const pos = [i, j]

    const LINE_COLOR = 'white'

    let styler = {
        flex: 1,
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
        styler.borderRightColor = LINE_COLOR
        styler.borderBottomColor = LINE_COLOR
    } else if (pos[0] === 0 && pos[1] === 1) {
        styler.borderLeftWidth = 2
        styler.borderRightWidth = 2
        styler.borderBottomWidth = 2
        styler.borderLeftStyle = 'solid'
        styler.borderRightStyle = 'solid'
        styler.borderBottomStyle = 'solid'
        styler.borderLeftColor = LINE_COLOR
        styler.borderRightColor = LINE_COLOR
        styler.borderBottomColor = LINE_COLOR
    } else if (pos[0] === 0 && pos[1] === 2) {
        styler.borderLeftWidth = 2
        styler.borderBottomWidth = 2
        styler.borderLeftStyle = 'solid'
        styler.borderBottomStyle = 'solid'
        styler.borderLeftColor = LINE_COLOR
        styler.borderBottomColor = LINE_COLOR

    // Middle Row 
    } else if (pos[0] === 1 && pos[1] === 0) {
        styler.borderTopWidth = 2
        styler.borderRightWidth = 2
        styler.borderBottomWidth = 2
        styler.borderTopStyle = 'solid'
        styler.borderRightStyle = 'solid'
        styler.borderBottomStyle = 'solid'
        styler.borderTopColor = LINE_COLOR
        styler.borderRightColor = LINE_COLOR
        styler.borderBottomColor = LINE_COLOR
    } else if (pos[0] === 1 && pos[1] === 1) {
        styler.borderWidth = 2
        styler.borderStyle = 'solid'
        styler.borderColor = LINE_COLOR
    } else if (pos[0] === 1 && pos[1] === 2) {
        styler.borderTopWidth = 2
        styler.borderLeftWidth = 2
        styler.borderBottomWidth = 2
        styler.borderTopStyle = 'solid'
        styler.borderLeftStyle = 'solid'
        styler.borderBottomStyle = 'solid'
        styler.borderTopColor = LINE_COLOR
        styler.borderLeftColor = LINE_COLOR
        styler.borderBottomColor = LINE_COLOR

    // Bottom Row
    } else if (pos[0] === 2 && pos[1] === 0) {
        styler.borderRightWidth = 2
        styler.borderTopWidth = 2
        styler.borderRightStyle = 'solid'
        styler.borderTopStyle = 'solid'
        styler.borderRightColor = LINE_COLOR
        styler.borderTopColor = LINE_COLOR
    } else if (pos[0] === 2 && pos[1] === 1) {
        styler.borderTopWidth = 2
        styler.borderRightWidth = 2
        styler.borderLeftWidth = 2
        styler.borderTopStyle = 'solid'
        styler.borderRightStyle = 'solid'
        styler.borderLeftStyle = 'solid'
        styler.borderTopColor = LINE_COLOR
        styler.borderRightColor = LINE_COLOR
        styler.borderLeftColor = LINE_COLOR
    } else if (pos[0] === 2 && pos[1] === 2) {
        styler.borderLeftWidth = 2
        styler.borderTopWidth = 2
        styler.borderLeftStyle = 'solid'
        styler.borderTopStyle = 'solid'
        styler.borderLeftColor = LINE_COLOR
        styler.borderTopColor = LINE_COLOR
    } 

    return (
        <TouchableOpacity 
            style={styler}
            onPress={() => {
                makeMove(block, i, j)
            }}
        >
            <Text
                style={{
                    fontSize: 50,
                    color: 'white'
                }}
            >
                {block}
            </Text>
        </TouchableOpacity>
    )
}
