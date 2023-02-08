import { View, Text, StyleSheet, ImageBackground, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

import Cell from '../components/Cell';

import bg from '../../images/bg.jpeg';

const emptyMap = [
    ['', '', ''], //1st row
    ['', '', ''], // 2nd row
    ['', '', ''], // 3rd row
];

const copyArray = original => {
    const copy = JSON.parse(JSON.stringify(original));
    return copy;
};

const Home = () => {
    const [maps, setMaps] = useState(emptyMap);

    const [currentTurn, setCurrentTurn] = useState('x');

    const [gameMode, setGameMode] = useState('BOT_MEDIUM'); // LOCAL, BOT_EASY , BOT_MEDIUM

    useEffect(() => {
        if (currentTurn === 'o') {
            botTurn();
        }
    }, [currentTurn]);


    useEffect(() => {

        const winner = getWinner(maps);

        if (winner) {
            gameWon(winner);
        } else {
            checkTieStage();
        }

    }, [maps])

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


    };

    const getWinner = winnerMap => {
        //check row
        for (let i = 0; i < 3; i++) {
            const isRowXWinning = winnerMap[i].every(cell => cell === 'x');
            const isRowOWinning = winnerMap[i].every(cell => cell === 'o');
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
                if (winnerMap[row][col] !== 'x') {
                    isColumnXWinner = false;
                }
                if (winnerMap[row][col] !== 'o') {
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
            if (winnerMap[i][i] !== 'o') {
                isDiagonal1OWining = false;
            }

            if (winnerMap[i][i] !== 'x') {
                isDiagonal1XWining = false;
            }

            if (winnerMap[i][2 - i] !== 'o') {
                isDiagonal2OWining = false;
            }

            if (winnerMap[i][2 - i] !== 'x') {
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

    const botTurn = () => {
        // collect all possible options
        const possiblePositions = [];

        maps.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                if (cell === '') {
                    possiblePositions.push({ row: rowIndex, col: colIndex });
                }
            });
        });

        let choseOption;

        // Attack

        possiblePositions.forEach(possiblePosition => {
            const mapCopy = copyArray(maps);

            mapCopy[possiblePosition.row][possiblePosition.col] = 'o';

            const winner = getWinner(mapCopy);
            if (winner === 'o') {
                // Attack that position
                choseOption = possiblePosition;
            }
        });


        if (!choseOption) {
            //Defend

            //Check if the opponent WINS if it takes one of the possible Position
            possiblePositions.forEach(possiblePosition => {
                const mapCopy = copyArray(maps);

                mapCopy[possiblePosition.row][possiblePosition.col] = 'x';

                const winner = getWinner(mapCopy);
                if (winner === 'x') {
                    // Defend that position
                    choseOption = possiblePosition;
                }
            });

        }

        // choose random
        if (!choseOption) {
            choseOption =
                possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
        }

        if (choseOption) {
            OnPress(choseOption.row, choseOption.col);
        }
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

                <View style={styles.buttons}>
                    <Text
                        onPress={() => setGameMode('LOCAL')}
                        style={[
                            styles.button,
                            { backgroundColor: gameMode === 'LOCAL' ? '#4F5686' : '#191F24' },
                        ]}>
                        Local
                    </Text>
                    <Text
                        onPress={() => setGameMode('BOT_EASY')}
                        style={[
                            styles.button,
                            {
                                backgroundColor:
                                    gameMode === 'BOT_EASY' ? '#4F5686' : '#191F24',
                            },
                        ]}>
                        Easy Bot
                    </Text>
                    <Text
                        onPress={() => setGameMode('BOT_MEDIUM')}
                        style={[
                            styles.button,
                            {
                                backgroundColor:
                                    gameMode === 'BOT_MEDIUM' ? '#4F5686' : '#191F24',
                            },
                        ]}>
                        Medium Bot
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;

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
    buttons: {
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
    },
    button: {
        color: 'white',
        margin: 10,
        fontSize: 16,
        backgroundColor: '#191F24',
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
});
