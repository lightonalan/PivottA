import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from 'src/redux/actions/index';
import { bindActionCreators } from 'redux';
import AppColors from 'src/utils/theme/AppColors';
import Messages from 'src/utils/constant/Messages';
import { verticalScale, scale, moderateScale } from 'src/utils/theme/Scale';
import { navigate, reset } from 'src/navigation/service/NavigationService';
import images from 'src/assets/images';
import SettingRow from './component/settingRow';
import IconInvite from 'src/assets/Icons/IconInvite';
import IconUpgarde from 'src/assets/Icons/IconUpgarde';
import IconRegisterPass from 'src/assets/Icons/IconRegisterPass';
import IconUnsubscribed from 'src/assets/Icons/IconUnsubscribed';
import IconFAQ from 'src/assets/Icons/IconFAQ';
import IconTerm from 'src/assets/Icons/IconTerm';
import IconPrivacy from 'src/assets/Icons/IconPrivacy';
import IconLaw from 'src/assets/Icons/IconLaw';
import componentNames from 'src/utils/constant/componentNames';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import IconPlus from 'src/assets/Icons/IconPlus';
import API from 'src/common/network/API';
import * as loginActions from 'src/redux/actions/loginActions';
import { useDispatch, useSelector } from 'react-redux';
import ModalFilter from 'src/screens/profile/component/modalFilter';
const Account = () => {
  const dispatch = useDispatch();
  const [uriImageUser, setUriImageUser] = useState('');
  const [isShowModalExport, setIsShowModalExport] = useState('');
  const [userData, setUserData] = useState();
  useEffect(() => {
    API.userInfo().then(res => {
      setUserData(res.data.data);
    });
  });
  const handleLaunchCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: true,
      },
      response => {
        if (!response.didCancel) {
          setUriImageUser(response?.assets[0]?.uri);
        }
      },
    );
  };

  const handleShowModalExport = () => {
    setIsShowModalExport(true);
  };

  const handleCloseModalExport = () => {
    setIsShowModalExport(false);
  };

  const handleOpenPicker = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: true,
      },
      response => {
        if (!response.didCancel) {
          setUriImageUser(response?.assets[0]?.uri);
        }
      },
    );
  };

  const logOut = () => {
    dispatch(loginActions.logOut());
    reset('AuthenStack', {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputImageView}>
        <View style={styles.addImageView}>
          <TouchableOpacity
            style={styles.btnChangeImageContainer}
            onPress={handleOpenPicker}>
            <Image
              style={styles.imgUser}
              source={uriImageUser ? { uri: uriImageUser } : images.imagePicker}
            />
            <View style={styles.iconPlusContainer}>
              <IconPlus />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.userName}>
              {userData && userData.middle_name_kanji}
            </Text>
            <View style={styles.pointView}>
              <Text style={styles.buttonWhiteText}>{Messages.selectFile}</Text>
              <Text style={styles.buttonWhiteText}>12 Pt</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.centerView}>
        <TouchableOpacity style={styles.buttonWhite}>
          <Text style={styles.buttonWhiteText}>{Messages.editResume}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBlue}
          onPress={handleShowModalExport}>
          <Text style={styles.buttonBlueText}>{Messages.outputResume}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <SettingRow
          icon={<IconInvite />}
          settingText={Messages.inviteFriend}
          onPressSetting={() => {
            navigate(componentNames.INVITE_FRIEND_SCREEN);
          }}
        />
        <SettingRow
          onPressSetting={() => {
            navigate(componentNames.UPGRADE_ACCOUNT_SCREEN);
          }}
          icon={<IconUpgarde />}
          settingText={Messages.upgarde}
        />
        <SettingRow
          icon={<IconRegisterPass />}
          settingText={Messages.registerPass}
        />
        <SettingRow
          icon={<IconUnsubscribed />}
          settingText={Messages.unsubscribed}
        />
        <SettingRow
          icon={<IconFAQ />}
          settingText={Messages.FAQ}
          onPressSetting={() => {
            navigate(componentNames.FAQ_SCREEN);
          }}
        />
        <SettingRow
          icon={<IconTerm />}
          settingText={Messages.termOfUse}
          onPressSetting={() => {
            navigate(componentNames.TERM_OF_USER_SCREEN);
          }}
        />
        <SettingRow
          icon={<IconPrivacy />}
          settingText={Messages.privacyPolicy}
          onPressSetting={() => {
            navigate(componentNames.PRIVACY_POLICY_SCREEN);
          }}
        />
        <SettingRow
          icon={<IconLaw />}
          settingText={Messages.law}
          onPressSetting={() => {
            navigate(componentNames.LAW_SCREEN);
          }}
        />
        <TouchableOpacity onPress={logOut} style={styles.logOut}>
          <Text style={styles.logOutText}>{Messages.logOut}</Text>
        </TouchableOpacity>
      </ScrollView>
      <ModalFilter
        onClose={handleCloseModalExport}
        isVisible={isShowModalExport}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  centerView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(24),
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
    paddingHorizontal: scale(20),
  },
  inputView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(20),
  },
  inputImageView: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(20),
  },
  addImageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingTop: verticalScale(16),
  },
  buttonWhiteText: {
    color: AppColors.backgroundBlue,
    alignItems: 'center',
  },
  userName: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  pointView: {
    marginTop: verticalScale(20),
    height: verticalScale(44),
    width: scale(210),
    borderRadius: 14,
    alignItems: 'center',
    borderColor: AppColors.backgroundBlue,
    borderWidth: 1,
    backgroundColor: AppColors.blue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(8),
  },
  buttonBlue: {
    backgroundColor: AppColors.backgroundBlue,
    height: verticalScale(48),
    width: scale(150),
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBlueText: {
    color: AppColors.white,
    alignItems: 'center',
  },
  buttonWhite: {
    backgroundColor: AppColors.white,
    height: verticalScale(48),
    width: scale(150),
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: AppColors.backgroundBlue,
    borderWidth: 1,
    // paddingRight:scale(40)
  },

  logOut: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(30),
    borderWidth: 1,
    borderColor: '#D8D6E2',
  },
  logOutText: {
    color: '#004FAC',
    marginVertical: verticalScale(18),
  },
  btnChangeImageContainer: {
    height: scale(96),
    width: scale(96),
  },
  imgUser: {
    height: scale(96),
    width: scale(96),
    borderRadius: scale(48),
  },
  iconPlusContainer: {
    position: 'absolute',
    right: moderateScale(-1),
    bottom: 0,
    padding: scale(4),
    backgroundColor: '#ffffff',
    borderRadius: scale(20),
  },
});

export default Account;
