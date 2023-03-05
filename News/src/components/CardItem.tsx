import {Pressable, StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import {NewsData} from '../utils/types';
import {Card, useTheme} from 'react-native-paper';
import {NavigationProp, Route} from '@react-navigation/native';
type Props = {
  title: string;
  image_url: string;
  description: string;
  content: string;
  navigation: NavigationProp<Route>;
};

const CardItem = (props: Props) => {
  const theme = useTheme();

  const handlePress = () => {
    props.navigation.navigate('NewsOverview', {
      title: props.title,
      image_url: props.image_url,
      description: props.description,
      content: props.content,
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <Card
        style={{
          marginVertical: 10,
          backgroundColor: theme.colors.elevation.level5,
        }}>
        {props.image_url ? (
          <>
            <Card.Cover borderRadius={10} source={{uri: props.image_url}} />
            {props.description && (
              <Card.Title
                title={props.title}
                subtitle={props.description.split('\n')[0]}
                titleNumberOfLines={1}></Card.Title>
            )}
          </>
        ) : null}
      </Card>
    </Pressable>
  );
};

export default CardItem;

const styles = StyleSheet.create({});
