import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const DrawerNav = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgProfile}>
        <Image
          style={styles.img}
          source={require('../../assets/image/man.jpeg')}
        />
        <View style={styles.userNameProfile}>
          <Text style={[styles.nameProfile, {marginLeft: -40}]}>Joker</Text>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Text style={[styles.nameProfile, {marginRight: -10}]}>
              Show Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navScreen}>
        <TouchableOpacity onPress={() => navigation.navigate('chat')}>
          <Text style={[styles.titleBtn, {marginTop: 30}]}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('item')}>
          <Text style={styles.titleBtn}>Items</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('experts')}>
          <Text style={styles.titleBtn}>Experts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('decor')}>
          <Text style={styles.titleBtn}>Decor Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('notification')}>
          <Text style={styles.titleBtn}>Notification</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.settingRate}>
        <TouchableOpacity onPress={() => navigation.navigate('setting')}>
          <Text style={[styles.titleBtn, {marginTop: 15}]}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('rate')}>
          <Text style={styles.titleBtn}>Rate us</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={[styles.titleBtn, {marginTop: -10}]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  imgProfile: {
    width: '100%',
    height: 160,
    backgroundColor: 'rgba(46, 134, 222,0.40)',
  },
  img: {
    width: 80,
    height: 80,
    marginTop: 25,
    marginLeft: 30,
    borderRadius: 40,
  },
  userNameProfile: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  nameProfile: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navScreen: {
    width: '100%',
    height: 280,
    backgroundColor: 'rgba(46, 134, 222,0.30)',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  btnNav: {},
  titleBtn: {
    marginLeft: 28,
    marginBottom: 30,
    fontStyle: 'italic',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  settingRate: {
    width: '100%',
    height: 175,
    backgroundColor: 'rgba(46, 134, 222,0.30)',
  },
});
export default DrawerNav;
