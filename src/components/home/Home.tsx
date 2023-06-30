import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

import HomeController from './HomeController';
import EntypoIcon from 'react-native-vector-icons/Entypo';
//Config Name here
import {
  homeTitle,
  logoutText,
  lableName,
  lableEmail,
  lablePhone,
} from './HomeConfig';
export class Home extends HomeController {
  render() {
    const data = this.props.route.params.userDetailes;
    console.log(data.email);
    return (
      <View>
        <View style={styles.topCard}>
          <Text style={styles.UserProfileHead}>{homeTitle}</Text>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text style={styles.LogoutText}>{logoutText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.photoCard}>
          {this.state.photo !== null && (
            <Image
              style={styles.priviewImg}
              resizeMode="contain"
              source={{uri: `${this.state.photo}`}}
            />
          )}
        </View>
        <TouchableOpacity
          style={styles.uploadeBtn}
          onPress={this.handleChoosePhoto}>
          <EntypoIcon name="camera" size={25} color="#fff" />
        </TouchableOpacity>
        <View style={styles.personDetailsCrad}>
          <View style={styles.userDetailsCard}>
            <EntypoIcon name="user" size={40} />
            <View>
              <Text style={styles.lableText}>{lableName}</Text>
              <Text style={styles.userDetailText}>
                {data.firstName} {data.lastName}
              </Text>
            </View>
          </View>
          <View style={styles.userDetailsCard}>
            <EntypoIcon name="mail" size={40} />
            <View>
              <Text style={styles.lableText}>{lableEmail}</Text>
              <Text style={styles.userDetailText}>{data.email}</Text>
            </View>
          </View>
          <View style={styles.userDetailsCard}>
            <EntypoIcon name="phone" size={40} />
            <View>
              <Text style={styles.lableText}>{lablePhone}</Text>
              <Text style={styles.userDetailText}>{data.mobileNum}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  UserProfileHead: {
    fontSize: 30,
  },
  photoCard: {
    backgroundColor: '#fff',
    height: 180,
    width: 180,
    borderRadius: 90,
    alignSelf: 'center',
    marginTop: 30,
  },
  priviewImg: {
    height: 190,
    width: 190,
    borderRadius: 90,
    marginRight: 15,
    alignSelf: 'center',
  },
  uploadeBtn: {
    position: 'absolute',
    backgroundColor: '#1a9628',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    margin: 20,
    alignSelf: 'center',
    top: 170,
    left: 200,
  },
  logoutBtn: {
    backgroundColor: '#037bfc',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  LogoutText: {
    color: '#fff',
  },
  personDetailsCrad: {
    padding: 15,
    marginTop: 15,
  },
  userDetailText: {
    fontSize: 20,
    marginBottom: 10,
    color: '#000',
    marginLeft: 15,
  },
  lableText: {
    fontSize: 20,
    marginLeft: 15,
  },
  userDetailsCard: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Home;
