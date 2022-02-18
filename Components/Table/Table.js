import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from '../Square/Square'
import Row from '../Row/Row'

export default function Table({ movesCounter, setMovesCounter, table, setTable, pressRestartGame, XScore, setXScore, MScore, setMScore, tieScore, setTieScore }) {

  // console.log('Table')

  const winningConditions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 0], [1, 1], [2, 0]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]]
  ]

  const [playerXMoves, setPlayerXMoves] = useState([])
  const [playerMMoves, setPlayerMMoves] = useState([])

  const [currentPlayer, setCurrentPlayer] = useState('X')

  const changePlayer = () => {
    if (currentPlayer === 'X') {
      setCurrentPlayer('M')
    } else {
      setCurrentPlayer('X')
    }
  }

  const checkForWin = () => {
    
    

  }

  return (
    <View style={{ 
      flex: 0.5,
      width: '90%',
    }}>

    {
      table.map((row, i) => {
        return (
          <Row 
            key={i} 
            row={row} 
            i={i} 
            currentPlayer={currentPlayer}
            changePlayer={changePlayer} 
            table={table} 
            setTable={setTable} 
            checkForWin={checkForWin}
            playerMMoves={playerMMoves}
            setPlayerXMoves={setPlayerXMoves}
            playerMMoves={playerMMoves}
            setPlayerMMoves={setPlayerMMoves}
          />
        )
      })
    }

        {/* <View style={{ 
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          height: '45%',
        }}>
          <Square 
            squareId={0} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
            table={table}
            setTable={setTable}
            checkForWin={checkForWin}
          />
          <Square 
            squareId={1} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
            table={table}
            setTable={setTable}
            checkForWin={checkForWin}
          />
          <Square 
            squareId={2} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
            table={table}
            setTable={setTable}
            checkForWin={checkForWin}
          />
        </View>
        <View style={{ 
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          height: '45%',
        }}>
          <Square 
            squareId={3} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
            table={table}
            setTable={setTable}
            checkForWin={checkForWin}
          />
          <Square 
            squareId={4} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
            table={table}
            setTable={setTable}
            checkForWin={checkForWin}
          />
          <Square 
            squareId={5} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
            table={table}
            setTable={setTable}
            checkForWin={checkForWin}
          />
        </View>
        <View style={{ 
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          height: '45%',
        }}>
          <Square 
            squareId={6} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
            table={table}
            setTable={setTable}
            checkForWin={checkForWin}
          />
          <Square 
            squareId={7} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
            table={table}
            setTable={setTable}
            checkForWin={checkForWin}
          />
          <Square 
            squareId={8} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
            table={table}
            setTable={setTable}
            checkForWin={checkForWin}
          />
        </View> */}
      </View>
  );
}
