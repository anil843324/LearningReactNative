import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Alert,
} from 'react-native';
import React, { useState } from 'react';


import Cell from './src/components/Cell';

import bg from './images/bg.jpeg';

const emptyMap = [
  ['', '', ''], //1st row
  ['', '', ''], // 2nd row
  ['', '', ''], // 3rd row
];

const App = () => {
  const [maps, setMaps] = useState(emptyMap);

  const [currentTurn, setCurrentTurn] = useState('x');

  const OnPress = (rowIndex, colIndex) => {

    if (maps[rowIndex][colIndex] !== '') {
      Alert.alert('Position already occupied');
      return;
    }

    setMaps(existingMap => {
      const updatedMap = [...existingMap];
      updatedMap[rowIndex][colIndex] = currentTurn;
      return updatedMap;
    });

    setCurrentTurn(currentTurn === 'x' ? 'o' : 'x');
    const winner = getWinner();
    if (winner) {
      gameWon(winner);
    } else {
      checkTieStage();
    }
  };

  const getWinner = () => {
    //check row
    for (let i = 0; i < 3; i++) {
      const isRowXWinning = maps[i].every(cell => cell === 'x');
      const isRowOWinning = maps[i].every(cell => cell === 'o');
      if (isRowXWinning) {
        return 'x';
      }
      if (isRowOWinning) {
        return 'o';
      }
    }

    //check column
    for (let col = 0; col < 3; col++) {
      let isColumnXWinner = true;
      let isColumnOWinner = true;

      for (let row = 0; row < 3; row++) {
        if (maps[row][col] !== 'x') {
          isColumnXWinner = false;
        }
        if (maps[row][col] !== 'o') {
          isColumnOWinner = false;
        }
      }

      if (isColumnXWinner) {
        return 'x';
      }
      if (isColumnOWinner) {
        return 'o';
      }
    }

    // check diagonal
    let isDiagonal1OWining = true;
    let isDiagonal1XWining = true;

    let isDiagonal2OWining = true;
    let isDiagonal2XWining = true;

    for (let i = 0; i < 3; i++) {
      if (maps[i][i] !== 'o') {
        isDiagonal1OWining = false;
      }

      if (maps[i][i] !== 'x') {
        isDiagonal1XWining = false;
      }

      if (maps[i][2 - i] !== 'o') {
        isDiagonal2OWining = false;
      }

      if (maps[i][2 - i] !== 'x') {
        isDiagonal2XWining = false;
      }
    }

    if (isDiagonal1OWining || isDiagonal2OWining) {
      return 'o';
    }

    if (isDiagonal1XWining || isDiagonal2XWining) {
      return 'x';
    }
  };

  const checkTieStage = () => {
    if (!maps.some(row => row.some(cell => cell === ''))) {
      Alert.alert(`It's a tie`, `tie 🤦‍♂️`, [
        {
          text: 'Restart',
          onPress: resetGame,
        },
      ]);
    }
  };

  const gameWon = player => {
    Alert.alert(`Huraaay`, `Player ${player} won 🎆🎆`, [
      {
        text: 'Restart',
        onPress: resetGame,
      },
    ]);
  };

  const resetGame = () => {
    setMaps([
      ['', '', ''], //1st row
      ['', '', ''], // 2nd row
      ['', '', ''], // 3rd row
    ]);
    setCurrentTurn('x');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            position: 'absolute',
            top: 50,
          }}>
          Current Turn : {currentTurn.toUpperCase()}
        </Text>
        <View style={styles.map}>
          {maps.map((row, rowIndex) => (
            <View style={styles.row} key={rowIndex}>
              {row.map((cel, columnIndex) => (

                <Cell
                  key={columnIndex + rowIndex}
                  cel={cel}
                  onPress={() => OnPress(rowIndex, columnIndex)}


                />

              ))}
            </View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242D34',
  },
  bg: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  map: {
    width: '80%',
    aspectRatio: 1,
    padding: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },



});

/*
 <Pressable
                  key={columnIndex + rowIndex}
                  onPress={() => OnPress(rowIndex, columnIndex)}
                  style={styles.cell}>
                  {cel === 'o' && <View style={styles.circle} />}
                  {cel === 'x' && <Cross />}
                </Pressable> 

*/
