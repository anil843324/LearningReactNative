import {Pressable, StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import {NewsData} from '../utils/types';
import {Card, useTheme} from 'react-native-paper';
const CardItem = (props: NewsData) => {
  const theme = useTheme();
  return (
    <Pressable onPress={() => }>
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
