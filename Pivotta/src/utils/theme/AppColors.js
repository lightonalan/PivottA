const app = {
  themeApp: '#60AE34',
  background: '#FFF',
  white: '#FFFFFF',
  black: '#000000',
  backgroundBlue: '#004FAC',
  blue: '#EFF3FF',
  gray: '#A0ABBE',
  dark: '#000',
  blue2: '#004FAC',
  red: '#FF203B',
  grayBlack: 'rgba(41, 38, 61, 0.24)',
  grayBlackTittle: 'rgba(40, 60, 80, 1)',
  blueTxt: 'rgba(0, 79, 172, 1)',
  innerBorder: '#D8D8D8',
  txtBlue: '#283C50',
  txtRed: '#AC0A00',
  borderColor: '#D8D8D8',
  grey:'#717e8e', 
  abi_blue: '#1B64B0', 
  spaceGrey: '#455A64', 
};

const brand = {
  brand: {
    primary: '#FFF',
    secondary: '#17233D',
  },
};

const text = {
  textNavbar: '#fff',
  textPrimary: '#131313',
  textSecondary: '#909090',
  textMinor: '#CCCCCC',
  textRed: '#F42F47',
  textBlue: '#00aedd',
  headingPrimary: brand.brand.primary,
  headingSecondary: brand.brand.primary,
  textTitle: '#68737f',
  textContent: 'rgba(52, 64, 82, 1)',
  textSubContent: 'rgba(52, 64, 82, 0.5)',
  regular: '#344052',
  placeHolder: 'rgba(0,0,0,0.3)',
  textBoldColor: '#283C50',
};

const borders = {
  border: '#DFDFDF',
};

const ticked = {
  ticked: '#39CE13',
};

const tabbar = {
  tabbar: {
    background: {active: '#1976d2', inactive: app.abi_blue},
  },
};

const navbar = {
  navbar: {
    background: '#343f51',
  },
};

const searchbar = {
  searchbar: {
    background: '#343f51',
    textInput: '#9FADB4',
    backgroundText: '#434F61',
  },
};

const dialog = {
  dialogBody: 'rgba(238, 241, 242, 1)',
  dialogDivider: 'rgba(205, 217, 223, 1)',
};

export default {
  ...app,
  ...brand,
  ...text,
  ...borders,
  ...tabbar,
  ...navbar,
  ...dialog,
  ...searchbar,
  ...ticked,
};
