import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const theme = {
  primaryColor: '#004f93',
  borderColor: '#fff',
  textColor: '#fff',
  primaryHeight: height / 5,
  secondaryHeight: height / 3,
  primaryWidth: width / 5,
  secondaryWidth: width / 3
};

export default theme;
