import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import Table from './Components/Table/Table';
import Header from './Components/Header/Header'
import ResetButton from './Components/ResetButton/ResetButton'
import NativeModal from './Components/Modal/Modal';

export default function App() {

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

  const [playerWonOpacity, setPlayerWonOpacity] = useState('0')
  // const [tieOpacity, setTieOpacity] = useState('0%')

  const [winnerTag, setWinnerTag] = useState('')

  const pressRestartGame = () => {
    setTable([['', '', ''], ['', '', ''], ['', '', '']])
    setMovesCounter(0)
    setPlayerWon(false)
    setCurrentPlayer('X')
    setPlayerMMoves([])
    setPlayerXMoves([])
  }

  return (
    <View style={styles.container}>
      <Header 
        XScore={XScore} 
        MScore={MScore} 
        tieScore={tieScore} 
      />

      {/* <View style={{
        flex: 0.125,
        opacity: tieOpacity
      }}>
        <Text style={{
                  color: 'white',
                  fontSize: 20
                }}>Tie!!!</Text>
      </View> */}

      {/* <View style={{
        flex: playerWonOpacity,
        // opacity: playerWonOpacity
      }}>
        <Text style={{
                  color: 'white',
                  fontSize: 20
                }}>PLAYER {winnerTag} WON !!!</Text>
      </View> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={tieModalVisible}
      >
        <View style={{
        flex: 1,
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
        flex: 1,
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
        setPlayerWonOpacity={setPlayerWonOpacity}
        setWinnerTag={setWinnerTag}
        setWinModalVisible={setWinModalVisible}
        setTieModalVisible={setTieModalVisible}
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
