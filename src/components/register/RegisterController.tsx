import {Component} from 'react';
import {Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
interface IProps {
  navigation?: any;
}

interface IState {
  firstName: string;
  lastName: string;
  password: string;
  conformPs: string;
  email: string;
  mobileNum: string;
  errorMsg: string;
  usersData: any;
  isPasswordVisible: boolean;
  isConformPSVisible: boolean;
}

class RegisterController extends Component<IProps, IState> {
  state = {
    firstName: '',
    password: '',
    lastName: '',
    email: '',
    mobileNum: '',
    conformPs: '',
    errorMsg: '',
    usersData: {},
    isPasswordVisible: true,
    isConformPSVisible: true,
  };

  onPressRegister = () => {
    const {firstName, lastName, password, email, mobileNum, conformPs} =
      this.state;
    const contactsData = {
      id: new Date(),
      firstName,
      lastName,
      email,
      mobileNum,
      password,
      conformPs,
    };
    if (firstName === '') {
      this.setState({errorMsg: '*Please Enter First Name'});
    } else if (lastName === '') {
      this.setState({errorMsg: '*Please Enter Last Name'});
    } else if (email === '') {
      this.setState({errorMsg: '*Please Enter Email'});
    } else if (email.endsWith('@gmail.com') === false) {
      this.setState({errorMsg: '*Please Enter Valid Emaail'});
    } else if (mobileNum.length < 10) {
      this.setState({errorMsg: '*Please Enter 10 digit Number'});
    } else if (password === '') {
      this.setState({errorMsg: '*Please Enter Password'});
    } else if (password.length <= 3) {
      this.setState({errorMsg: '*Please Give Password More them 3 letters'});
    } else if (conformPs === '') {
      this.setState({errorMsg: '*Please Enter Conform Password'});
    } else if (password !== conformPs) {
      this.setState({errorMsg: '*Password is miss match'});
    } else {
      this.setState(
        {
          usersData: contactsData,
          firstName: '',
          lastName: '',
          email: '',
          mobileNum: '',
          password: '',
          conformPs: '',
          errorMsg: '',
        },
        () => {
          this.setData();
        },
      );
    }
  };

  setData = async () => {
    const {usersData} = this.state;
    const pastData: any = await AsyncStorage.getItem('userData');
    const prevData: any = JSON.parse(pastData);
    console.log(prevData);
    if (prevData === null) {
      await AsyncStorage.setItem('userData', JSON.stringify([usersData]));
      Alert.alert('Congrats', 'user Successfully Register');
      this.props.navigation.navigate('Login');
    } else {
      const newData = [...prevData, usersData];
      await AsyncStorage.setItem('userData', JSON.stringify(newData));
      Alert.alert('Congrats', 'user Successfully Register');
      this.props.navigation.navigate('Login');
    }
  };
}

export default RegisterController;
