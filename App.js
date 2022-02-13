import React from 'react';
import { StyleSheet, View } from 'react-native';
import Table from './Components/Table/Table';
import Header from './Components/Header/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Table/>
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
