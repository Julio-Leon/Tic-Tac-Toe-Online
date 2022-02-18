import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Table from './Components/Table/Table';
import Header from './Components/Header/Header'
import ResetButton from './Components/ResetButton/ResetButton'

export default function App() {

  const [table, setTable] = useState([['', '', ''], ['', '', ''], ['', '', '']])

  const [XScore, setXScore] = useState(0)
  const [MScore, setMScore] = useState(0)
  const [tieScore, setTieScore] = useState(0)

  const [movesCounter, setMovesCounter] = useState(0)

  const pressRestartGame = () => {
    setTable([['', '', ''], ['', '', ''], ['', '', '']])
    setMovesCounter(0)
  }

  return (
    <View style={styles.container}>
      <Header 
        XScore={XScore} 
        MScore={MScore} 
        tieScore={tieScore} 
      />
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
    height: '100%'
  },
});
