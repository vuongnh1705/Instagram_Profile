import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons, Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const countNumber = [
  { id: 1, count: 18, name: 'Photos' },
  { id: 2, count: '15k', name: 'Followers' },
  { id: 3, count: 605, name: 'Following' },
];

const imgData = [
  { id: 1, imgSource: require('./assets/love.jpg') },
  { id: 2, imgSource: require('./assets/yellow-1343606__340.jpg') },
  { id: 3, imgSource: require('./assets/triangle.jpg') },
  { id: 4, imgSource: require('./assets/milky-way.jpg') },
  { id: 5, imgSource: require('./assets/night-sky.jpg') },
  { id: 6, imgSource: require('./assets/water.jpg') },
  { id: 7, imgSource: require('./assets/musical-background.jpg') },
  { id: 8, imgSource: require('./assets/mystery.jpg') },
  { id: 9, imgSource: require('./assets/international-space-station.jpg') },
  { id: 10, imgSource: require('./assets/heart.jpg') },
  { id: 11, imgSource: require('./assets/milky-way-1.jpg') },
  { id: 12, imgSource: require('./assets/smoke.jpg') },
  { id: 13, imgSource: require('./assets/chemistry.jpg') },
  { id: 14, imgSource: require('./assets/coffee-2319107__340.jpg') },
  { id: 15, imgSource: require('./assets/abstract.jpg') },
  { id: 16, imgSource: require('./assets/abstract-background-designs-1081912__340.jpg') },
  { id: 17, imgSource: require('./assets/Nebula.jpg') },
  { id: 18, imgSource: require('./assets/Featured.jpg') },
];

const centerImgData = Math.floor(imgData.length / 2);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Ionicons name='md-arrow-back' size={30}></Ionicons>
          <Entypo name='grid' size={30}></Entypo>
        </View>
        <View style={styles.header}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar}
              source={require('./assets/vuong.jpg')}
            ></Image>
          </View>
          <View style={styles.userInfo}>
            <View>
              <Text style={styles.userName}>Nguyễn Hùng Vương</Text>
              <Text style={styles.job}>Developer</Text>
            </View>
            <View style={styles.btnWrapper}>
              <TouchableOpacity onPress={() => Alert.alert('Followed')}>
                <View
                  style={[styles.btn, styles.followBtn]}
                >
                  <Text style={{ color: "white" }}> Follow </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Alert.alert('Send')}>
                <View
                  style={[styles.btn, styles.sendBtn]}
                >
                  <Ionicons name='md-send' size={20} color={'white'}></Ionicons>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>
        <View style={styles.countArea}>
          <View style={styles.infoCount}>
            {
              countNumber.map(countN => {
                return (
                  <View key={countN.id} style={styles.countSelf}>
                    <Text style={styles.count}>{countN.count}</Text>
                    <Text style={styles.countName}>{countN.name}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View style={styles.imageArea}>
          <ScrollView contentContainerStyle={styles.imageScroll}>
            <View>
              {imgData.slice(0, centerImgData).map(item => {
                return (item.id == 1) ? <Image key={item.id} source={item.imgSource} style={styles.image1}></Image> : <Image key={item.id} source={item.imgSource} style={styles.image}></Image>
              })}
            </View>
            <View>
              {imgData.slice(centerImgData).map(item => {
                return <Image key={item.id} source={item.imgSource} style={styles.image}></Image>
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottom}>
          <MaterialCommunityIcons name="home-outline" size={30}></MaterialCommunityIcons>
          <Feather name="plus-square" size={30}></Feather>
          <Feather name="user" size={30}></Feather>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.05,
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  header: {
    flex: 0.20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'

  },
  avatarWrapper: {
    flex: 0.4,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  userInfo: {
    flex: 0.6,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  job: {
    fontWeight: '500',
    color: '#8c8c8c'
  },
  btnWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  btn: {
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followBtn: {
    backgroundColor: FOLLOW_COLOR,
    width: 120,
    shadowColor: "#000",
  },
  sendBtn: {
    width: 50,
    backgroundColor: SEND_MESSAGE_COLOR,
    marginLeft: 10,
  },
  countArea: {
    flex: 0.10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoCount: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  countName: {
    fontWeight: '500',
    color: '#8c8c8c',
    fontSize: 15,
  },
  count: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  countSelf: {
    alignItems: 'center'
  },
  imageArea: {
    flex: 0.6,
    paddingLeft: 30,
    paddingRight: 30
  },
  imageScroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image1: {
    width: 160,
    height: 170,
    borderRadius: 10,
    marginTop: 10,
  },
  image: {
    width: 160,
    height: 250,
    borderRadius: 10,
    marginTop: 10,
  },
  bottom: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // iOS
    shadowOffset: {
      width: 0,            // These can't both be 0
      height: 1,           // i.e. the shadow has to be offset in some way
    },
  }
});
