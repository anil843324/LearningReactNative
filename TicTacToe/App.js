import { View, Text, StyleSheet, ImageBackground, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import Cell from './src/components/Cell';
import bg from './images/bg.jpeg';
const App = () => {

  const [maps, setMaps] = useState([
    ["", "", ""], //1st row
    ["", "", ""], // 2nd row
    ["", "", ""],  // 3rd row
  ])

  const [currentTurn, setCurrentTurn] = useState('x')

  const OnPress = (rowIndex, colIndex) => {
    if (maps[rowIndex][colIndex] !== "") {
      Alert.alert('Position already occupied')
      return;
    }

    setMaps((existingMap) => {

      const updatedMap = [...existingMap]
      updatedMap[rowIndex][colIndex] = currentTurn;
      return updatedMap;
    })

    setCurrentTurn(currentTurn === "x" ? "o" : "x")

  }


  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <View style={styles.map}>

          {
            maps.map((row, rowIndex) => (
              <View style={styles.row} key={rowIndex}>
                {row.map((cel, columnIndex) => <Pressable
                  key={columnIndex}
                  onPress={() => OnPress(rowIndex, columnIndex)}
                  style={styles.cell}>

                  {cel === "o" && (<View style={styles.circle} />)}
                  {cel === "x" && (<View style={styles.cross}>
                    <View style={styles.crossLine} />
                    <View style={[styles.crossLine, styles.crossLineReversed]} />
                  </View>)}

                </Pressable>)}
              </View>

            ))
          }




          {/* <View style={styles.circle} />

        
          <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>  */}
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

  }
  ,
  cell: {
    width: 100,
    height: 100,
    flex: 1,


  }
  ,
  circle: {

    flex: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,

    borderWidth: 10,
    borderColor: 'white',
  },
  cross: {
    flex: 1,
  },
  crossLine: {
    position: 'absolute',
    left: '48%',
    width: 10,
    height: '100%',
    borderRadius: 5,
    backgroundColor: 'white',
    transform: [{ rotate: '45deg' }],
  },
  crossLineReversed: {
    transform: [{ rotate: '-45deg' }],
  },
});
