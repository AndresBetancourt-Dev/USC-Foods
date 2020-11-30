import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const StarRating = (props) => {
  let stars = [];

  for (var i = 1; i <= 5; i++) {
    let name = 'star';
    if (i > props.ratings) {
      stars.push(
        <FontAwesome5
          name={'star'}
          size={props.size - 2.5}
          style={styles.star}
          key={i}
        />,
      );
      continue;
    }
    stars.push(
      <FontAwesome
        name={'star'}
        size={props.size}
        style={styles.star}
        key={i}
      />,
    );
  }

  return (
    <View style={styles.container}>
      {stars}
      <Text style={styles.text}>({props.reviews})</Text>
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#FF8C00',
  },
  text: {
    fontSize: 12,
    marginLeft: 5,
    color: '#444',
  },
});
