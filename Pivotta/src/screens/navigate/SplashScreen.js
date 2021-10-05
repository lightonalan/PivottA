import React, {useEffect} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {ActionCreators} from 'src/redux/actions/index';
import {bindActionCreators} from 'redux';
import {navigate, reset} from 'src/navigation/service/NavigationService';
import images from 'src/assets/images';
import {useDispatch, useSelector} from 'react-redux';
import Loading from 'src/components/LoadingView'
import * as loginActions from 'src/redux/actions/loginActions';
import Toast from 'react-native-simple-toast';
import API from 'src/common/network/API';
import configureStore from 'src/redux'; 
const { store } = configureStore();
const SplashScreen = () => {
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);
  const refresh_token = useSelector(state => state.loginReducer.refresh_token);
  // const dispatch = useDispatch();
  useEffect(() => {

    setTimeout(() => {
      API.refreshToken(refresh_token).then((res) => {
        console.log(res)
        store.dispatch(loginActions.refreshToken(res.data.data.token,res.data.data.refresh_token)); 
        navigate('Home')
      }).catch((err) => {
        console.log(err) 
        store.dispatch(loginActions.logOut());
        reset('AuthenStack', {});
        if( error?.response.data.error.code === "4016"){ 
          Toast.showWithGravity(error?.response.data.error.message, 2, Toast.TOP);
        } 
      })
     
      // if (isLoggedIn) {
      //   reset('MainNavigator');
      // } else {
      //   reset('AuthenStack');
      // }
    }, 2000);
  }, []);

  return (
    <View style={styles.centerView}>
        <Loading showAbsoluteFullScreen={true} />
      {/* <ImageBackground source={images.backGroundLogin} style={styles.imageBg} resizeMode='stretch'/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'90%'
  },

  imageBg: {
    width: '100%',
    height: '100%',
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

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
