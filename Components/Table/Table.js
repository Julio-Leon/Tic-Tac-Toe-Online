import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from '../Square/Square'
import Row from '../Row/Row'

export default function Table({ movesCounter, setMovesCounter, table, setTable, pressRestartGame, XScore, setXScore, MScore, setMScore, tieScore, setTieScore, playerWon, setPlayerWon, currentPlayer, setCurrentPlayer, playerXMoves, setPlayerXMoves, playerMMoves, setPlayerMMoves, setPlayerWonOpacity, setWinnerTag }) {

  const [makingMove, setMakingMove] = useState(false)

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

  const incrementCounter = (winner) => winner === 'X' ? setXScore(XScore + 1) : setMScore(MScore + 1)

  const changePlayer = () => currentPlayer === 'X' ? setCurrentPlayer('M') : setCurrentPlayer('X')
  
  const showWinMessage = (winner) => {
    setWinnerTag(winner)
    setPlayerWonOpacity('100%')
    setTimeout(() => {
      setPlayerWonOpacity('0%')
      incrementCounter(winner)
      pressRestartGame()
    }, 3000)
  }

  const checkIfInPlayerArray = (move, tempPlayerArray) => {
    return tempPlayerArray.find(playerMove => {
      return move[0] === playerMove[0] && move[1] === playerMove[1]
    })
  }

  const checkForWin = (tempPlayerArray) => {

    let passed = false

    for (let i = 0; i < winningConditions.length; i++) {
      passed = winningConditions[i].every(part => {
        return checkIfInPlayerArray([part[0], part[1]], tempPlayerArray)
      })
      setPlayerWon(passed)
      if (passed) break
    }

    return passed
  }

  const makeMove = (block, i, j) => {
    if (block !== '') return

    const newTable = table.map((newRow, ii) => {
        return newRow.map((newBlock, jj) => {
            return i === ii && j === jj ? currentPlayer : newBlock
        })
    })

    if (currentPlayer === 'X') {
      if (checkForWin([...playerXMoves, [i, j]])) {
        setPlayerWon('X')
        showWinMessage('X')
      }
      setPlayerXMoves([...playerXMoves, [i, j]])
    } else {
        if (checkForWin([...playerMMoves, [i, j]])) {
          setPlayerWon('M')
          showWinMessage('M')
        }
        setPlayerMMoves([...playerMMoves, [i, j]])
    }

    setTable(newTable)
    changePlayer() 
}

  return (
    <View style={{ 
      flex: 0.5,
      width: '90%',
      backgroundColor: playerWon==='X' ? 'blue' : playerWon==='M' ? 'green' : 'black',
    }}>

    {
      table.map((row, i) => {
        return (
          <Row 
            key={i} 
            row={row} 
            i={i}
            makeMove={makeMove}
            playerWon={playerWon}
            makingMove={makingMove}
            setMakingMove={setMakingMove}
          />
        )
      })
    }

    </View>
  );
}

// IMPLEMENT TIE LOGIC