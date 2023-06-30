import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import RegisterController from './RegisterController';

import Icons from 'react-native-vector-icons/Entypo';
import {
  registerHeadText,
  registerText,
  announceText,
  loginText,
} from './RegisterConfig';

class Register extends RegisterController {
  render() {
    const iconName = this.state.isPasswordVisible ? 'eye-with-line' : 'eye';
    const iconNameEye = this.state.isConformPSVisible ? 'eye-with-line' : 'eye';
    return (
      <View style={styles.container}>
        <Text style={styles.registerHead}>{registerHeadText}</Text>
        <TextInput
          onFocus={() => {
            this.setState({errorMsg: ''});
          }}
          style={styles.input}
          value={this.state.firstName}
          placeholder="First Name"
          onChangeText={text => this.setState({firstName: text})}
        />
        <TextInput
          onFocus={() => {
            this.setState({errorMsg: ''});
          }}
          style={styles.input}
          placeholder="Last Name"
          value={this.state.lastName}
          onChangeText={text => this.setState({lastName: text})}
        />
        <TextInput
          onFocus={() => {
            this.setState({errorMsg: ''});
          }}
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          onChangeText={text => this.setState({email: text})}
        />
        <TextInput
          onFocus={() => {
            this.setState({errorMsg: ''});
          }}
          style={styles.input}
          placeholder="Mobile Number"
          maxLength={10}
          keyboardType="numeric"
          value={this.state.mobileNum}
          onChangeText={text => this.setState({mobileNum: text})}
        />
        <View style={styles.passwordCard}>
          <TextInput
            onFocus={() => {
              this.setState({errorMsg: ''});
            }}
            style={styles.inputPassword}
            placeholder="Password"
            secureTextEntry={this.state.isPasswordVisible}
            onChangeText={text => this.setState({password: text})}
          />
          <TouchableOpacity
            onPress={() => {
              this.setState({isPasswordVisible: !this.state.isPasswordVisible});
            }}>
            <Icons name={iconName} size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordCard}>
          <TextInput
            onFocus={() => {
              this.setState({errorMsg: ''});
            }}
            style={styles.inputPassword}
            placeholder="Conform Password"
            value={this.state.conformPs}
            secureTextEntry={this.state.isConformPSVisible}
            onChangeText={text => this.setState({conformPs: text})}
          />
          <TouchableOpacity
            onPress={() => {
              this.setState({
                isConformPSVisible: !this.state.isConformPSVisible,
              });
            }}>
            <Icons name={iconNameEye} size={25} />
          </TouchableOpacity>
        </View>
        <Text style={styles.errorMsgText}>{this.state.errorMsg}</Text>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={this.onPressRegister}>
          <Text style={styles.loginText}>{registerText}</Text>
        </TouchableOpacity>
        <Text>
          {announceText}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text style={styles.signUpBtnText}>{loginText}</Text>
          </TouchableOpacity>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
  passwordCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
  },
  inputPassword: {
    width: '80%',
  },
  registerHead: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  signUpBtnText: {
    color: '#fc8803',
    marginLeft: 15,
    marginTop: 10,
    fontSize: 20,
  },
  loginBtn: {
    backgroundColor: '#037bfc',
    marginBottom: 16,
    padding: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
  },
  loginWithCard: {
    marginBottom: 16,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  facebookIcon: {
    height: 30,
    width: 30,
  },
  smallText: {
    fontSize: 18,
  },
  errorMsgText: {
    marginBottom: 10,
    color: '#b81c11',
    fontSize: 16,
  },
});

export default Register;
