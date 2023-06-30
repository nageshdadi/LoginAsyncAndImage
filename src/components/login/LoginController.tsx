import {Component} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {
  navigation?: any;
  route?: any;
}

interface IState {
  email: string;
  password: string;
  usersLogData: any;
  errorMsg: string;
  isPasswordVisible: boolean;
}

class LoginController extends Component<IProps, IState> {
  state = {
    email: '',
    password: '',
    usersLogData: [],
    errorMsg: '',
    isPasswordVisible: true,
  };

  componentDidMount(): void {
    this.getData();
  }
  getData = async () => {
    const pastData: any = await AsyncStorage.getItem('userData');
    const prevData: any = JSON.parse(pastData);
    if (prevData === null) {
      Alert.alert('warning', 'null value in Async Storage');
    } else {
      this.setState({usersLogData: prevData, errorMsg: ''});
    }
  };

  componentDidUpdate() {
    this.props.navigation.addListener('focus', this.getData);
  }
  onPressLogin = () => {
    const {usersLogData, email, password} = this.state;
    if (email === '') {
      this.setState({errorMsg: '*Please Enter Email'});
    } else if (password === '') {
      this.setState({errorMsg: '*Please Enter Password'});
    } else {
      const filteredUser = usersLogData.filter(
        (each: any) => each.email === email && each.password === password,
      );
      if (filteredUser.length === 0) {
        Alert.alert('Sorry', 'User Dose not Match');
        this.setState({errorMsg: '*Please Enter Valid User Details'});
      } else {
        const userDetailes = filteredUser[0];
        this.setState({email: '', password: '', errorMsg: ''});
        this.props.navigation.navigate('Home', {userDetailes});
      }
    }
  };
}

export default LoginController;
