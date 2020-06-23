import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(46, 134, 222,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Notification;
