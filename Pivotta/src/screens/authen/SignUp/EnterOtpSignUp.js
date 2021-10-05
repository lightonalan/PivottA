import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from 'src/redux/actions/index';
import { bindActionCreators } from 'redux';
import AppColors from 'src/utils/theme/AppColors';
import Messages from 'src/utils/constant/Messages';
import { verticalScale, scale } from 'src/utils/theme/Scale';
import HeaderBack from 'src/components/HeaderBack';
import OTPInputView from 'src/components/lib/react-native-otp-input';
import { navigate } from 'src/navigation/service/NavigationService';
import auth from '@react-native-firebase/auth';
import API from 'src/common/network/API';
const EnterOtp = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);
  const [code, setCode] = useState('');
  const { confirmation } = route.params;
  const goEnterOtp = code => {
    setCode(code);
    if (code.length === 6) {
      setValid(false);
    }
  };

  async function confirmCode() {
    try {
      setLoading(true);
      let check = await confirmation.confirm(code);
      if (check) {
        auth().onAuthStateChanged(user => {
          user.getIdToken().then(async idToken => {
            if (idToken) {
              API.signUp(idToken).then(data => {
                setLoading(false);
              });
            }
          });
        });
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      alert(error);
      console.log('Invalid code.');
    }
  }
  return (
    <View style={styles.container}>
      <HeaderBack headerName={''} renderLeft={null} renderRight={<View />} />
      <Text style={styles.textTitle}>{Messages.confirmOtp}</Text>
      <OTPInputView
        style={styles.otpView}
        pinCount={6}
        autoFocusOnLoad={true}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
        placeholderTextColor="#000"
        code={code}
        onCodeChanged={code => goEnterOtp(code)}
        keyboardType={'phone-pad'}
      />
      <View style={styles.centerView}>
        <TouchableOpacity
          style={styles.buttonBlue}
          onPress={() => confirmCode()}
          style={!valid ? styles.buttonBlue : styles.buttonGray}
          disabled={valid}>
          {!loading && (
            <Text style={styles.buttonBlueText}>{Messages.next}</Text>
          )}
          {loading && (
            <ActivityIndicator
              style={styles.loadding}
              size="small"
              color={AppColors.white}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    // paddingHorizontal: verticalScale(20)
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: verticalScale(400)
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
    paddingHorizontal: scale(20),
  },
  buttonBlue: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(24),
    backgroundColor: AppColors.backgroundBlue,
    height: verticalScale(52),
    width: scale(328),
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGray: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(24),
    backgroundColor: AppColors.gray,
    height: verticalScale(52),
    width: scale(328),
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBlueText: {
    color: AppColors.white,
    alignItems: 'center',
  },
  inputPhone: {
    paddingHorizontal: scale(20),
    height: verticalScale(44),
    width: scale(328),
    margin: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: AppColors.backgroundBlue,
  },
  underlineStyleBase: {
    width: scale(40),
    height: verticalScale(54),
    borderRadius: 12,
    // backgroundColor: colors.white,
    // color: colors.neutral100,
    fontSize: 32,
    borderWidth: 1,
    // borderBottomWidth: 1,
    borderColor: '#9faeb8',
    margin: scale(6),
  },
  otpView: {
    width: scale(204),
    height: verticalScale(64),
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(20),
  },
});
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterOtp);
