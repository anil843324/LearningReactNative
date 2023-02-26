//@ts-nocheck

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Appbar, Chip, Button} from 'react-native-paper';
const categories = ['Technology', 'Sports', 'Politics', 'Health', 'business'];
const API_KEY = 'pub_1787961db0fadd29d70590e4e68625e7c9ec5';
import {useTheme} from 'react-native-paper';
const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const theme = useTheme();
  const handleSelect = (val: String) => {
    setSelectedCategories((prev: string[]) =>
      prev.find(p => p === val)
        ? prev.filter(cat => cat !== val)
        : [...prev, val],
    );
  };

  const handlePres = async () => {};

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home"></Appbar.Content>
      </Appbar.Header>

      <View style={styles.filterContainer}>
        {categories.map(cat => (
          <Chip
            key={cat}
            mode="outlined"
            style={styles.chipItem}
            textStyle={{fontWeight: '400', color: 'white', padding: 1}}
            showSelectedOverlay
            selected={selectedCategories.find(c => cat === c) ? true : false}
            onPress={() => handleSelect(cat)}>
            {cat}
          </Chip>
        ))}

        <Button
          mode="contained"
          style={styles.button}
          labelStyle={{fontSize: 14, margin: 'auto'}}
          icon={'sync'}
          onPress={handlePres}>
          Refresh
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  chipItem: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  button: {
    maxWidth: 400,
    padding: 0,
    maxHeight: 40,
  },
});
