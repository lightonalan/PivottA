import {Dimensions} from 'react-native';
import AppColors from './AppColors';
import AppFonts from './AppFonts';

const {width, height} = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

export default {
  screen: {
    height: screenHeight,
    width: screenWidth,
    widthHalf: screenWidth * 0.5,
    widthThird: screenWidth * 0.333,
    widthTwoThirds: screenWidth * 0.666,
    widthQuarter: screenWidth * 0.25,
    widthThreeQuarters: screenWidth * 0.75,
  },

  navbar: {
    backgroundColor: AppColors.navbar.background,
    borderBottomWidth: 0,
    shadowColor: AppColors.border,
    elevation: 1,
    zIndex: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  navbarTitle: {
    // fontFamily: Fonts.base.family,
    // fontSize: Fonts.h3.size,
    fontWeight: '400',
  },
  subTextSemibold: {
    // fontFamily: Fonts.semibold.family,
    fontSize: 13,
    // lineHeight: parseInt(Fonts.semibold.lineHeight * 0.75, 10),
    color: AppColors.textSecondary,
  },
  regularText: {
    fontFamily: AppFonts.base.family,
  },
};
