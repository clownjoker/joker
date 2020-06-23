import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../src/component/HeaderItems';

const Items = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.today}>Today</Text>
      </View>
      <ScrollView>
        <View style={styles.contentItems}>
          <View style={styles.imgCard} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>Three-line item</Text>
            <Text>Set up perspiciatis,unde omnis iste natus</Text>
            <Text>error sit voluptatem accusantium dolorem</Text>
          </View>
        </View>

        <View style={styles.contentItems}>
          <View style={styles.imgCard} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>Three-line item</Text>
            <Text>Set up perspiciatis,unde omnis iste natus</Text>
            <Text>error sit voluptatem accusantium dolorem</Text>
          </View>
        </View>

        <View style={styles.contentItems}>
          <View style={styles.imgCard} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>Three-line item</Text>
            <Text>Set up perspiciatis,unde omnis iste natus</Text>
            <Text>error sit voluptatem accusantium dolorem</Text>
          </View>
        </View>

        <View style={styles.contentItems}>
          <View style={styles.imgCard} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>Three-line item</Text>
            <Text>Set up perspiciatis,unde omnis iste natus</Text>
            <Text>error sit voluptatem accusantium dolorem</Text>
          </View>
        </View>

        <View style={styles.contentItems}>
          <View style={styles.imgCard} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>Three-line item</Text>
            <Text>Set up perspiciatis,unde omnis iste natus</Text>
            <Text>error sit voluptatem accusantium dolorem</Text>
          </View>
        </View>

        <View style={styles.contentItems}>
          <View style={styles.imgCard} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>Three-line item</Text>
            <Text>Set up perspiciatis,unde omnis iste natus</Text>
            <Text>error sit voluptatem accusantium dolorem</Text>
          </View>
        </View>
        <View style={styles.contentItems}>
          <View style={styles.imgCard} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>Three-line item</Text>
            <Text>Set up perspiciatis,unde omnis iste natus</Text>
            <Text>error sit voluptatem accusantium dolorem</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  today: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 15,
    marginLeft: 15,
  },
  contentItems: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 5,
  },
  imgCard: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(46, 134, 222,0.20)',
    borderRadius: 20,
    marginLeft: 15,
    marginHorizontal: 15,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default Items;
