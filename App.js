import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import Table from './Components/Table/Table';
import Header from './Components/Header/Header'
import ResetButton from './Components/ResetButton/ResetButton'

export default function App() {

  const [gameMode, setGameMode] = useState(false)

  const [table, setTable] = useState([['', '', ''], ['', '', ''], ['', '', '']])

  const [winModalVisible, setWinModalVisible] = useState(false)
  const [tieModalVisible, setTieModalVisible] = useState(false)

  const [XScore, setXScore] = useState(0)
  const [MScore, setMScore] = useState(0)
  const [tieScore, setTieScore] = useState(0)

  const [movesCounter, setMovesCounter] = useState(0)

  const [playerWon, setPlayerWon] = useState(false)

  const [currentPlayer, setCurrentPlayer] = useState('X')

  const [playerXMoves, setPlayerXMoves] = useState([])
  const [playerMMoves, setPlayerMMoves] = useState([])

  const [winnerTag, setWinnerTag] = useState('')

  const pressRestartGame = () => {
    setTable([['', '', ''], ['', '', ''], ['', '', '']])
    setMovesCounter(0)
    setPlayerWon(false)
    setCurrentPlayer('X')
    setPlayerMMoves([])
    setPlayerXMoves([])
  }

  if (!gameMode) {
    return (
      <View>
        <Text style={{
          flex: 0.17,
          color: 'white',
          fontSize: 50
        }}>
          Tic Tac Toe
        </Text>

        <Text style={{
          flex: 0.17,
          color: 'white',
          fontSize: 30
        }}>
          Choose Your Fate.
        </Text>

        <TouchableOpacity style={{
            flex: 0.05,
            height: '10%',
            width: '30%',
            marginTop: 30,
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'solid',
            borderColor: 'white',
            borderWidth: 5,
            borderRadius: 10,
        }}
        onPress={setGameMode(1)}
        >
            <Text style={{
                color: 'white'
            }}>Person vs Person</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            flex: 0.05,
            height: '10%',
            width: '30%',
            marginTop: 30,
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'solid',
            borderColor: 'white',
            borderWidth: 5,
            borderRadius: 10,
        }}
        onPress={setGameMode(2)}
        >
            <Text style={{
                color: 'white'
            }}>Person vs Computer</Text>
        </TouchableOpacity>

      </View>
    )
  }

  return (

    <View style={styles.container}>

      <Text style={{
          flex: 0.17,
          color: 'white',
          fontSize: 50
        }}>
        Tic Tac Toe
      </Text>

      <Header 
        XScore={XScore} 
        MScore={MScore} 
        tieScore={tieScore} 
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={tieModalVisible}
      >
        <View style={{
          marginTop: '20%',
          marginRight: '10%',
          marginLeft: '10%',
          backgroundColor: "#353C51",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        }}>
          <Text style={{
            color: 'white',
            fontSize: 50
          }}>Tie!!!</Text>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={winModalVisible}
      >
        <View style={{
          marginTop: '20%',
          marginRight: '10%',
          marginLeft: '10%',
          backgroundColor: "#353C51",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        }}>
          <Text style={{
            color: 'white',
            fontSize: 50
          }}>PLAYER {winnerTag} WON !!!</Text>
        </View>
      </Modal>

      <Table 
        movesCounter={movesCounter} 
        setMovesCounter={setMovesCounter} 
        table={table} 
        setTable={setTable} 
        pressRestartGame={pressRestartGame} 
        XScore={XScore} 
        setXScore={setXScore} 
        MScore={MScore} 
        setMScore={setMScore} 
        tieScore={tieScore} 
        setTieScore={setTieScore}
        playerWon={playerWon}
        setPlayerWon={setPlayerWon}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        playerXMoves={playerXMoves}
        playerMMoves={playerMMoves}
        setPlayerXMoves={setPlayerXMoves}
        setPlayerMMoves={setPlayerMMoves}
        setWinnerTag={setWinnerTag}
        setWinModalVisible={setWinModalVisible}
        setTieModalVisible={setTieModalVisible}
        gameMode={gameMode}
      />
      <ResetButton pressRestartGame={pressRestartGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
});


// LOADING MULTIPLE STYLES AS OBJECTS FOR CSS 
// DARK THEME SWITCH BUTTON
