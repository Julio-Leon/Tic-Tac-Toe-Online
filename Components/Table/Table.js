import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from '../Square/Square'
import Row from '../Row/Row'

export default function Table() {

  const [table, setTable] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])

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
    winningConditions.forEach(condition, () => {
      let passed = true
      condition.forEach(term, () => {
        if (!currentPlayer.moves.includes(term)) {
          passed = false
        }
      })
      if (passed) {

        // FROM INTERNTET //
        Alert.alert(
          "Alert Title",
          "My Alert Msg",
          [
            {
              text: "Ask me later",
              onPress: () => console.log("Ask me later pressed")
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
        // FROM INTERNET //

      }
    })
  }

  return (
    <View style={{ 
      flex: 0.5,
      width: '90%',
    }}>

        {/* {table.map((row, i), () => {
          return <Row row={row} i={i} />
        })} */}

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
          />
          <Square 
            squareId={1} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
          />
          <Square 
            squareId={2} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
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
          />
          <Square 
            squareId={4} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
          />
          <Square 
            squareId={5} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
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
          />
          <Square 
            squareId={7} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
          />
          <Square 
            squareId={8} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            changePlayer={changePlayer}
          />
        </View>
      </View>
  );
}
