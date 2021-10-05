import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import NormalFace from 'src/assets/Icons/NormalFace';
import SadFace from 'src/assets/Icons/SadFace';
import SadFaceSlected from 'src/assets/Icons/SadFaceSlected';
import SmileFace from 'src/assets/Icons/SmileFace';
import SmileFaceSelected from 'src/assets/Icons/SmileFaceSelected';
import NormalFaceSelected from 'src/assets/Icons/NormalFaceSelected';
import images from 'src/assets/images';
import HeaderBack from 'src/components/HeaderBack';
import AppColors from 'src/utils/theme/AppColors';
import {scale} from 'src/utils/theme/Scale';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import Carousel from 'react-native-snap-carousel';
import {
  getContactDetailGPSAction,
  getContactDetailWebAction,
  knowCardDetailAction,
} from 'src/redux/actions/connectActions';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';
import CardConnection from './components/CardConnection';
import ListEmpty from './components/ListEmpty';
import Loading from 'src/components/LoadingView';
import {InteractionManager} from 'react-native';

const {width, height} = Dimensions.get('window');
const bigDadius = width / 3.4;
const smallRadius = width / 4.5;
const types = {
  KNOW: '2',
  UNKNOWN: '1',
  UNSPECIFIED: '0',
};
export default SelectAcquaintanceScreen = () => {
  const route = useRoute();
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {item, type} = route?.params || {};
  const user_id = useSelector(state => state.loginReducer.user_id);
  const [status, setStatus] = useState(2);
  const swiper = useRef(null);
  const [data, setData] = useState([]);
  const selectedIndex = useRef(0);
  const [headerHeight, setHeaderHeight] = useState(-1);
  const [loading, setLoading] = useState(true);
  const renderCardItem = ({item}) => {
    return (
      <View style={[styles.cardContainer, {}]}>
        <CardConnection item={item} />
      </View>
    );
  };
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      if (!user_id) {
        return;
      }
      console.log('item', item);

      const callback = {
        onSuccess: res => {
          setLoading(false);
          const dataCard = res?.data || [];
          const selectedData = dataCard[0];
          console.log('selectedData', selectedData);
          setStatus(selectedData?.status + '');
          setData(dataCard);
        },
        onFailed: () => {
          // setData([]);
          setLoading(false);
        },
      };

      if (type === 'WEB') {
        const data = {
          userId: user_id,
          contactId: item?.web_contact_id || -1,
        };
        dispatch(getContactDetailWebAction(data, callback));
      } else {
        const data = {
          userId: user_id,
          contactId: item?.gps_contact_id || -1,
        };
        dispatch(getContactDetailGPSAction(data, callback));
      }
    });
  }, [user_id]);

  const onKnowPress = type => {
    const currentCard = data[selectedIndex.current];
    if (!currentCard) {
      Toast.showWithGravity('空白のカード', 2, Toast.TOP);
      return;
    }
    if (selectedIndex.current < data.length - 1) {
      data[selectedIndex.current].status = type;
      setData([...data]);
      swiper?.current.snapToNext(true);
    } else {
      setStatus(type + '');
    }
    const callback = {
      onSuccess: res => {
        // data[selectedIndex.current].status = type;
        // setData([...data])
      },
      onFailed: () => {},
    };
    const dataPost = {
      status: type,
      contactId: currentCard?.contact_detail_id || -1,
    };
    dispatch(knowCardDetailAction(dataPost, callback));
  };

  return (
    <>
      {loading && <Loading showAbsoluteFullScreen={true} />}
      <HeaderBack
        setHeightOfHeader={height => {
          setHeaderHeight(height);
        }}
        customStyle={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.15,
          shadowRadius: 7,
          elevation: 10,
          marginBottom: 20,
          position: 'absolute',
          zIndex: 1,
          backgroundColor: 'white',
        }}
        contentStyle={{justifyContent: 'center', paddingHorizontal: 100}}
        headerName={item?.name || ''}
        renderLeft={null}
        renderRight={<View style={{width: 23}} />}
      />
      {data.length > 0 ? (
        <View style={[styles.container, {marginTop: headerHeight}]}>
          <View
            style={{
              height: (width * 174) / 295 + 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Carousel
              slideStyle={{paddingTop: 20}}
              onSnapToItem={slideIndex => {
                selectedIndex.current = slideIndex;
                const selectedData = data[slideIndex];
                setStatus(selectedData?.status + '' || -1);
              }}
              // loop={true}
              // scrollEnabled={false}
              layout={'tinder'}
              layoutCardOffset={10}
              ref={swiper}
              data={data}
              renderItem={renderCardItem}
              sliderWidth={width}
              itemWidth={width / 1.1}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: scale(15),
            }}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                disabled={status === types.UNKNOWN}
                onPress={() => {
                  onKnowPress(types.UNKNOWN);
                }}
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      status === types.UNKNOWN ? '#0E335E' : AppColors.white,
                  },
                ]}>
                {/* <SadFaceSlected width={bigDadius} height={bigDadius} style={{ alignSelf: 'center', }} /> */}

                {/* {status === types.UNKNOWN ? <FastImage source={images.sad_face_selected} style={{ height: bigDadius, width: bigDadius }} /> : <> */}
                <SadFace
                  color={status === types.UNKNOWN ? AppColors.white : '#0E335E'}
                />
                <Text
                  style={{
                    color:
                      status === types.UNKNOWN ? AppColors.white : '#0E335E',
                    marginTop: scale(5),
                    fontSize: 13,
                    fontWeight: 'bold',
                  }}>
                  知らない
                </Text>
                {/* </>} */}
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <TouchableOpacity
                disabled={status === types.UNSPECIFIED}
                onPress={() => {
                  onKnowPress(types.UNSPECIFIED);
                }}
                style={[
                  styles.circle,
                  {
                    borderWidth: scale(4),
                    height: smallRadius,
                    width: smallRadius,
                    alignSelf: 'center',
                    marginTop: bigDadius / 2 - smallRadius / 2,
                    backgroundColor:
                      status === types.UNSPECIFIED
                        ? '#0E335E'
                        : AppColors.white,
                  },
                ]}>
                {/* {status === types.UNSPECIFIED ? <FastImage source={images.normal_face_selected} style={{ height: smallRadius, width: smallRadius }} /> : <> */}
                <NormalFace
                  color={status === types.UNSPECIFIED ? 'white' : '#0E335E'}
                />
                <Text
                  style={{
                    color: status === types.UNSPECIFIED ? 'white' : '#0E335E',
                    marginTop: scale(5),
                    fontSize: 13,
                    fontWeight: 'bold',
                  }}>
                  うーん
                </Text>
                {/* </>} */}
                {/* <NormalFaceSelected width={smallRadius} height={smallRadius} style={{ alignSelf: 'center', }} /> */}
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                disabled={status === types.KNOW}
                onPress={() => {
                  onKnowPress(types.KNOW);
                }}
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      status === types.KNOW ? '#0E335E' : 'white',
                  },
                ]}>
                {/* {status === types.KNOW ? <FastImage source={images.smile_face_selected} style={{ height: bigDadius, width: bigDadius }} /> : <> */}
                <SmileFace
                  color={status === types.KNOW ? AppColors.white : '#0E335E'}
                />
                <Text
                  style={{
                    color: status === types.KNOW ? AppColors.white : '#0E335E',
                    marginTop: scale(5),
                    fontSize: 13,
                    fontWeight: 'bold',
                  }}>
                  知っている
                </Text>
                {/* </>} */}
                {/* <SmileFaceSelected width={bigDadius} height={bigDadius} style={{ alignSelf: 'center', }} /> */}
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: '#283C50',
              textAlign: 'center',
              marginTop: scale(25),
            }}>
            ※ 相手には通知されません
          </Text>
        </View>
      ) : !loading ? (
        <View style={styles.container}>
          <ListEmpty
            content1={'カードが見つかりません。'}
            content2={'ユーザーまたはカードが削除されました。'}
          />
        </View>
      ) : (
        <View />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    height: (width * 174) / 295,
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(40, 40, 60, 0.24)',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 16,
    overflow: 'hidden',
  },
  container: {
    padding: scale(15),
    backgroundColor: AppColors.white,
    flex: 1,
  },
  cardAvatar: {
    height: scale(50),
    width: scale(50),
    margin: scale(15),
  },
  circle: {
    height: bigDadius,
    width: bigDadius,
    borderWidth: scale(6),
    borderColor: '#c0c2c7',
    borderRadius: bigDadius / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(40, 40, 60, 0.24)',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 16,
  },
});
