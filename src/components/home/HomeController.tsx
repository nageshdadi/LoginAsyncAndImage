import {PermissionsAndroid} from 'react-native';
import {Component} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

interface IProps {
  route?: any;
  navigation?: any;
}
interface IState {
  photo: null | string;
}
export class HomeController extends Component<IProps, IState> {
  state = {
    photo: null,
  };

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log(granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  componentDidMount(): void {
    this.requestCameraPermission();
  }
  handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, (response: any) => {
      if (response && !response.didCancel) {
        this.setState({photo: response.assets[0].uri});
      }
    });
  };
}

export default HomeController;
