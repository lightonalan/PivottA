import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from 'src/components/Header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from 'src/assets/Icons';
import {moderateScale, verticalScale} from 'src/utils/theme/Scale';
import {navigate} from 'src/navigation/service/NavigationService';

const CommonBranchScreen = () => {
  const insets = useSafeAreaInsets();
  const _handlePress = data => {
    console.log('call press navigate', data);
    if (data === 'company') {
      navigate('Login');
    } else {
      // navigate('LoginAdvisor');
      // navigate('AdvisorOnboarding4');
      navigate('AdvisorProfileRegistration');
    }
  };

  return (
    <>
      <Header />
      <View style={[styles.container]}>
        <Text style={styles.title}>あなたはどちらですか？</Text>
        <TouchableOpacity onPress={() => _handlePress('company')}>
          <View style={styles.branchCompany}>
            <View style={styles.image}>
              <Image source={icons.ic_company} />
            </View>
            <Text>企業</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _handlePress('partner')}>
          <View style={styles.branchPartner}>
            <View style={styles.image}>
              <Image source={icons.ic_partner} />
            </View>
            <Text>パートナー</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CommonBranchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  branchCompany: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 160,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  branchPartner: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    width: '100%',
    height: 160,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    paddingBottom: 17,
  },
  title: {
    color: '#28323C',
    fontSize: moderateScale(18),
    marginBottom: verticalScale(32),
    fontWeight: 'bold',
  },
});
