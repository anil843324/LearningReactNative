//@ts-nocheck

import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useCallback} from 'react';
import {Appbar, Chip, Button} from 'react-native-paper';
const categories = ['Technology', 'Sports', 'Politics', 'Health', 'Business'];
const API_KEY = 'pub_1787961db0fadd29d70590e4e68625e7c9ec5';
import {useTheme} from 'react-native-paper';
import {NewsData, ComponentNavigationProps} from '../utils/types';
import CardItem from '../components/CardItem';
const Home = (props: ComponentNavigationProps) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const [nextPage, setNextPage] = useState('');

  const handleSelect = (val: String) => {
    setSelectedCategories((prev: string[]) =>
      prev.find(p => p === val)
        ? prev.filter(cat => cat !== val)
        : [...prev, val],
    );
  };

  const handlePres = async () => {
    const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=en${
      selectedCategories.length > 0
        ? `&category=${selectedCategories.join(',').toLocaleLowerCase()}`
        : ''
    }${nextPage?.length > 0 ? `&page=${nextPage}` : ''} `;
    try {
      await fetch(URL)
        .then(res => res.json())
        .then(data => {
          setNewsData(prev => [...prev, ...data.results]);
          setNextPage(data.nextPage);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(newsData);
  const renderItem = useCallback(
    ({item}) => (
      <CardItem
        // category={item.category}
        navigation={props.navigation}
        content={item.content}
        // country={item.country}
        // creator={item.creator}
        description={item.description}
        image_url={item.image_url}
        // keywords={item.keywords}
        // language={item.language}
        // link={item.link}
        // pubDate={item.pubDate}
        // source_id={item.source_id}
        title={item.title}
      />
    ),
    [],
  );

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
      <FlatList
        onEndReached={() => handlePres()}
        style={styles.flatList}
        data={newsData}
        renderItem={renderItem}
      />
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
  flatList: {
    flex: 1,
    height: 'auto',
  },
});
