import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../component/HeaderChat';

const Chats = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <View style={styles.viewMsg} />

        <View style={styles.subMsgContent}>
          <Text style={{marginTop: 3, marginLeft: 5}}>Some msg...</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 15}}>
        <View style={[styles.subMsgContent, {marginRight: -2}]}>
          <Text style={{marginTop: 3, marginLeft: 5}}>Some msg...</Text>
        </View>
        <View style={[styles.viewMsg, {marginRight: 15}]} />
      </View>
      <View style={styles.footerSendMsg}>
        <TextInput placeholder="Replay" style={{flex: 1, paddingLeft: 7}} />
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/add.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/send.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  viewMsg: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(46, 134, 222,0.5)',
    borderRadius: 30,
    marginLeft: 15,
  },
  subMsgContent: {
    flex: 1,
    height: 50,
    backgroundColor: 'rgba(46, 134, 222,0.10)',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 7,
  },
  footerSendMsg: {
    marginTop: 357,
    width: '100%',
    height: 62,
    backgroundColor: 'rgba(46, 134, 222,0.10)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(46, 134, 222,0.5)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 20,
    marginHorizontal: 10,
  },
});

export default Chats;
