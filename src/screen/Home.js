import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../component/HeaderHome';

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <TouchableOpacity>
        <View style={styles.circle}>
          <Text style={styles.plus}>+</Text>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <View style={styles.content}>
          <Image
            source={require('../../assets/image/img.png')}
            style={styles.img}
          />
          <View style={styles.contentDetails}>
            <Text style={styles.titleTask}>Task Title</Text>
            <Text style={styles.taskBody}>task body</Text>
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
              <Text style={styles.titleDetailsSetting}>details</Text>
              <Text style={[styles.titleDetailsSetting, {marginLeft: 20}]}>
                setting
              </Text>
            </View>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 20}}>
          <View style={styles.horizontalCard}>
            <Image
              source={require('../../assets/image/img1.jpg')}
              style={styles.imgCard}
            />
          </View>
          <View style={styles.horizontalCard}>
            <Image
              source={require('../../assets/image/img2.png')}
              style={styles.imgCard}
            />
          </View>
          <View style={styles.horizontalCard}>
            <Image
              source={require('../../assets/image/img3.jpg')}
              style={styles.imgCard}
            />
          </View>
          <View style={styles.horizontalCard}>
            <Image
              source={require('../../assets/image/img4.jpg')}
              style={styles.imgCard}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.titleFooter}>LABEL 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.titleFooter}>LABEL 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.titleFooter}>LABEL 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#4cd3c2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
    marginLeft: 15,
    borderRadius: 90,
  },
  plus: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    width: 330,
    height: 260,
    backgroundColor: '#c5e9fa',
    marginTop: 10,
    borderRadius: 2,
    elevation: 2,
  },
  img: {
    width: 330,
    height: 150,
    borderRadius: 2,
  },
  contentDetails: {
    marginTop: 10,
    marginLeft: 15,
  },
  titleTask: {
    fontSize: 19,
    marginLeft: 10,
  },
  taskBody: {
    color: '#636e72',
  },
  titleDetailsSetting: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  horizontalCard: {
    width: 120,
    height: 120,

    marginHorizontal: 3,
    borderRadius: 3,
  },
  imgCard: {
    width: 120,
    height: 130,
    borderRadius: 3,
  },
  footer: {
    width: '100%',
    height: 62,
    backgroundColor: 'rgba(46, 134, 222,0.5)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 35,
  },
  titleFooter: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;
