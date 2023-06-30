import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  // Alert,
} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import LoginController from './LoginController';
import {loginHeadText, annonceText, signupText} from './LoginConfig';

class Login extends LoginController {
  render() {
    console.log('state', this.state.usersLogData);
    const iconName = this.state.isPasswordVisible ? 'eye-with-line' : 'eye';
    return (
      <View style={styles.container}>
        <Text style={styles.loginHead}>{loginHeadText}</Text>
        <TextInput
          onFocus={() => {
            this.setState({errorMsg: ''});
          }}
          style={styles.input}
          value={this.state.email}
          placeholder="email"
          onChangeText={text => this.setState({email: text})}
        />
        <View style={styles.passwordCard}>
          <TextInput
            onFocus={() => {
              this.setState({errorMsg: ''});
            }}
            value={this.state.password}
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
        <Text style={styles.errorMsgText}>{this.state.errorMsg}</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={this.onPressLogin}>
          <Text style={styles.loginText}>{loginHeadText}</Text>
        </TouchableOpacity>
        <Text>
          {annonceText}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
            <Text style={styles.signUpBtnText}>{signupText}</Text>
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
  loginHead: {
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
  passwordCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 4,
  },
  inputPassword: {
    width: '80%',
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
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

export default Login;
