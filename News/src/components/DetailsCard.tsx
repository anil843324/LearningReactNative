import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';

import {Card, Text, useTheme} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
type Props = {
  title: string;
  image_url: string;
  content: string;
};

const DetailsCard = (props: Props) => {
  const theme = useTheme();

  return (
    <ScrollView>
      <Text
        style={{color: 'black', marginVertical: 10}}
        variant="headlineMedium">
        {props.title}
      </Text>

      <Card
        style={{backgroundColor: theme.colors.onSurface}}
        contentStyle={{width: Dimensions.get('window').width}}>
        {props.image_url && (
          <Card.Cover source={{uri: props.image_url}}></Card.Cover>
        )}

        <Card.Content>
          <Text
            textBreakStrategy="highQuality"
            variant="headlineSmall"
            style={{
              textAlign: 'left',
              color: 'black',
              marginVertical: 10,
            }}>
            {' '}
            {props.content}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({});
