import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from '../Square/Square'
import Row from '../Row/Row'

export default function Table({ movesCounter, setMovesCounter, table, setTable, pressRestartGame, XScore, setXScore, MScore, setMScore, tieScore, setTieScore }) {

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ]

  const [playerX, setPlayerX] = useState({
    id: 'X',
    moves: []
  })

  const [playerM, setPlayerM] = useState({
    id: 'M',
    moves: []
  })

  const [currentPlayer, setCurrentPlayer] = useState(playerX)

  const changePlayer = () => {
    if (currentPlayer.id === 'X') {
      setCurrentPlayer(playerM)
    } else {
      setCurrentPlayer(playerX)
    }
  }

  const checkForWin = () => {
    winningConditions.forEach(condition => {
      let passed = true
      condition.forEach(term => {
        if (!currentPlayer.moves.includes(term)) {
          passed = false
        }
      })
      if (passed) {

        pressRestartGame()

        if (currentPlayer.id === 'X') {
          setXScore(XScore + 1)
        } else {
          setMScore(MScore + 1)
        }
      }
    })

    if (movesCounter === 9) {
      pressRestartGame()
      setTieScore(TieScore + 1)
    }

  }

  return (
    <View style={{ 
      flex: 0.5,
      width: '90%',
    }}>

        <View style={{ 
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
        </View>
      </View>
  );
}
