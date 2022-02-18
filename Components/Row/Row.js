import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Square from '../Square/Square'

export default function Row({ row, i, currentPlayer, changePlayer, table, setTable, checkForWin, playerXMoves, setPlayerXMoves, playerMMoves, setPlayerMMoves }) {

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
                        currentPlayer={currentPlayer}
                        changePlayer={changePlayer} 
                        table={table} 
                        setTable={setTable} 
                        checkForWin={checkForWin}
                        playerXMoves={playerXMoves}
                        setPlayerXMoves={setPlayerXMoves}
                        playerMMoves={playerMMoves}
                        setPlayerMMoves={setPlayerMMoves}
                    />
                )
            })}
        </View>
    )
}
