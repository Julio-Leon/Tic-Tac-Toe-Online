import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Square from '../Square/Square'

export default function Row({ row, i, makeMove, playerWon, makingMove, setMakingMove }) {

    // console.log(row, i)

    return (
        <View style={{ 
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            height: '45%',
        }}>
            {row.map((block, j) => {
                return (
                    <Square 
                        key={(i, j)} 
                        block={block} 
                        i={i}
                        j={j}
                        makeMove={makeMove}
                        playerWon={playerWon}
                        makingMove={makingMove}
                        setMakingMove={setMakingMove}
                    />
                )
            })}
        </View>
    )
}
