import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from '../Square/Square'
import Row from '../Row/Row'

export default function Table({ movesCounter, setMovesCounter, table, setTable, pressRestartGame, XScore, setXScore, MScore, setMScore, tieScore, setTieScore }) {

  // console.log('Table')

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

  let winner

  const [playerXMoves, setPlayerXMoves] = useState([])
  const [playerMMoves, setPlayerMMoves] = useState([])

  // const xMoves = []
  // const mMoves = []

  const [currentPlayer, setCurrentPlayer] = useState('X')

  const [playerWon, setPlayerWon] = useState(false)

  const changePlayer = () => {
    if (currentPlayer === 'X') {
      setCurrentPlayer('M')
    } else {
      setCurrentPlayer('X')
    }
  }

  const checkIfInPlayerArray = (move) => {
    return currentPlayer === 'X' ? playerXMoves.find(playerMove => {
      return move[0] === playerMove[0] && move[1] === playerMove[1]
    }) : playerMMoves.find(playerMove => {
      return move[0] === playerMove[0] && move[1] === playerMove[1]
    })
  }

  const checkForWin = () => {

    let passed = false

    // console.log(playerXMoves.length)

    for (let i = 0; i < winningConditions.length; i++) {
      passed = winningConditions[i].every(part => {
        return checkIfInPlayerArray([part[0], part[1]])
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
        setPlayerXMoves([...playerXMoves, [i, j]])
    } else {
        setPlayerMMoves([...playerMMoves, [i, j]])
    }

    if (checkForWin()) {
        setPlayerWon(true)
    }
    setTable(newTable)
    changePlayer() 
}

  return (
    <View style={{ 
      flex: 0.5,
      width: '90%',
      backgroundColor: playerWon ? 'blue' : 'white'
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
