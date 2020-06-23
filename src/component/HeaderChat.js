import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HeaderHome = () => {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', marginLeft: 15}}>
        <Image
          source={require('../../assets/icons/menuHome.png')}
          style={styles.iconHeader}
        />
        <Text style={styles.title}>Chats</Text>
      </View>
      <Image
        source={require('../../assets/icons/serach.png')}
        style={[styles.iconHeader, {marginRight: 15}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(46, 134, 222,0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconHeader: {
    width: 22,
    height: 22,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 15,
  },
});

export default HeaderHome;
