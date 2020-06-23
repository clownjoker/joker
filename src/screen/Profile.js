import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bgImageContent}>
        <Image
          style={styles.img}
          source={require('../../assets/image/man.jpeg')}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.name}>Joker</Text>
        <Text style={styles.address}>CTO at Marvel Prototyping</Text>
        <Text style={styles.address}>Currently in London,UK</Text>
        <View style={styles.card}>
          <View style={styles.childCard}>
            <View style={styles.viewImg} />
            <View style={{marginLeft: 15}}>
              <Text style={{color: '#3b6978', fontWeight: 'bold'}}>Title</Text>
              <Text style={{color: '#3b6978'}}>SubTitle</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  bgImageContent: {
    width: '100%',
    height: 170,
    backgroundColor: 'rgba(46, 134, 222,0.40)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: '#ddd',
    marginTop: 135,
  },
  text: {
    marginTop: 35,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  address: {
    color: '#84a9ac',
  },
  card: {
    width: 325,
    height: 325,
    backgroundColor: 'rgba(46, 134, 222,0.10)',
    marginTop: 25,
  },
  childCard: {
    width: 325,
    height: 75,
    backgroundColor: 'rgba(46, 134, 222,0.20)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewImg: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(46, 134, 222,0.5)',
    borderRadius: 30,
    marginLeft: 15,
  },
});
export default Profile;
