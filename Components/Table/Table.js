import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from '../Square/Square'
import Row from '../Row/Row'

export default function Table({ 
  movesCounter, 
  setMovesCounter, 
  table, 
  setTable, 
  pressRestartGame, 
  XScore, 
  setXScore, 
  MScore, 
  setMScore, 
  tieScore, 
  setTieScore, 
  playerWon, 
  setPlayerWon, 
  currentPlayer, 
  setCurrentPlayer, 
  playerXMoves, 
  setPlayerXMoves, 
  playerMMoves, 
  setPlayerMMoves, 
  setPlayerWonOpacity, 
  setWinnerTag, 
  setWinModalVisible,
  setTieModalVisible
 }) {

  const [makingMove, setMakingMove] = useState(false)

  const winningConditions = [
    [[0, 0], [0, 1], [0, 2]], // TOP ROW
    [[1, 0], [1, 1], [1, 2]], // MIDDLE ROW
    [[2, 0], [2, 1], [2, 2]], // BOTTOM ROW
    [[0, 0], [1, 1], [2, 2]], // DIAGONAL 
    [[0, 2], [1, 1], [2, 0]], // DIAGONAL
    [[0, 0], [1, 0], [2, 0]], // LEFT COLUMN
    [[0, 1], [1, 1], [2, 1]], // MIDDLE COLUMN
    [[0, 2], [1, 2], [2, 2]]  // RIGHT COLUMN
  ]

  const incrementCounter = (winner) => winner === 'X' ? setXScore(XScore + 1) : setMScore(MScore + 1)

  const changePlayer = () => currentPlayer === 'X' ? setCurrentPlayer('M') : setCurrentPlayer('X')

  const showTieMessage = () => {
    setTieModalVisible(true)
    setTimeout(() => {
      setTieModalVisible(false)
      pressRestartGame()
    }, 3000)
  }
  
  const showWinMessage = (winner) => {
    setWinnerTag(winner)
    setWinModalVisible(true)
    setTimeout(() => {
      setWinModalVisible(false)
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

    let winnerFound = false

    setMovesCounter(movesCounter + 1)

    const newTable = table.map((newRow, ii) => {
        return newRow.map((newBlock, jj) => {
            return i === ii && j === jj ? currentPlayer : newBlock
        })
    })

    if (currentPlayer === 'X') {
      if (checkForWin([...playerXMoves, [i, j]])) {
        setPlayerWon('X')
        showWinMessage('X')
        winnerFound = true
      }
      setPlayerXMoves([...playerXMoves, [i, j]])
    } else {
        if (checkForWin([...playerMMoves, [i, j]])) {
          setPlayerWon('M')
          showWinMessage('M')
          winnerFound = true
        }
        setPlayerMMoves([...playerMMoves, [i, j]])
    }

    setTable(newTable)
    changePlayer() 
    if (movesCounter > 7 && !winnerFound) {
      showTieMessage()
    }
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