import {Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';
const ListDevice = [
  'iPhone 5',
  'iPhone 6', 
  'iPhone 7',
  'iPhone 8',
  'iPhone 5s',
  'iPhone 6s', 
  'iPhone 7s',
  'iPhone 8s', 
  'iphone 6 Plus',
  'iphone 7 Plus',
  'iphone 8 Plus',
  'iphone 6s Plus',
  'iphone 7s Plus',
  'iphone 8s Plus',
];
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
// var heightCustom = 0;
// console.log('height::', height);
// console.log('height::', width);
// heightCustom = (680 * 375) / 350;
// //DeviceInfo.getModel() === 'iPhone X'
// if (height === 812) {
//   //iphone X,11 Pro,Xs,
//   heightCustom = 680;
// } else if (height === 896) {
//   // 11 pro max, XS max,11,xr
//   heightCustom = 740;
// } else {
//   heightCustom = height;
// }

const scale = size => {
  return widthScreen * (size / guidelineBaseWidth);
};
const verticalScale = size => heightScreen * (size / guidelineBaseHeight);
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const heightOfHeaderWithoutAreaView = verticalScale(60);
let deviceIos=false
DeviceInfo.getDeviceName().then(deviceName => {
  console.log(deviceName);
  if (ListDevice.includes(deviceName)) {
    deviceIos=true
  }
  else{
    deviceIos=false
  }
});
export {
  deviceIos,
  scale,
  verticalScale,
  moderateScale,
  widthScreen,
  heightScreen,
  heightOfHeaderWithoutAreaView,
};
