import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { RefreshControl } from 'react-native';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'src/components/LoadingView';
import { getListContactGPSAction } from 'src/redux/actions/connectActions';
import AppColors from 'src/utils/theme/AppColors';
import ItemConnection from './ItemConnection';
import Geolocation from 'react-native-geolocation-service';
import { get, set } from 'src/common/data/LocalStorage';
import { COORDS_LOCAL } from 'src/utils/constant';
import getDistance from 'geolib/es/getDistance';
import { StatusBar } from 'react-native';
import { Platform } from 'react-native';
import Permission from 'src/utils/Permission';
import Text from "../../../components/TextCustom"
import { verticalScale } from 'src/utils/theme/Scale';
import ListEmpty from './ListEmpty';

export default ListContactGPS = (props) => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.loginReducer.user);
    const { data } = props;
    const [gpsContactState, setGPSContactState] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false)
    const [lastPage, setLastPage] = useState(0)
    const [positionDebug, setDebugPosition] = useState('');
    const [totalRecord, setTotalRecord] = useState(0)
    const getListContactGPS = (page, isLoadMore) => {

        const callback = {
            onSuccess: async (res) => {
                console.log(res);
                const { lastPage, gpsContacts, totalRecord } = res?.data || { gpsContacts: [], lastPage: 0 };
                await setLoading(false)
                await setLastPage(lastPage);
                await setTotalRecord(totalRecord)
                await setRefreshing(false);
                if (isLoadMore) {
                    setGPSContactState(gpsContactState.concat(gpsContacts));
                    await setPage(page)
                    return;
                }
                setGPSContactState(gpsContacts)
            },
            onFailed: async () => {
                await setLoading(false)
                await setRefreshing(false)
            }
        }
        const data = {
            userId: userInfo?.user_id || -1,
            page
        }
        dispatch(getListContactGPSAction(data, callback))
    }


    const getLocationGPS = async (isInit) => {
        try {
            Geolocation.getCurrentPosition(
                async (position) => {
                    const coords = position?.coords || null;
                    const coordsLocal = await get(COORDS_LOCAL);
                    if (coordsLocal) {
                        const coordsLocalObj = JSON.parse(coordsLocal);
                        const distance = getDistance(
                            { latitude: coordsLocalObj.latitude, longitude: coordsLocalObj.longitude },
                            { latitude: coords.latitude, longitude: coords.longitude }
                        )
                        setDebugPosition('Distance: ' + distance + 'm  - From: ' + coordsLocalObj.latitude + '/' + coordsLocalObj.longitude + ' To: ' + coords.latitude + "/" + coords.longitude);
                        if (distance >= 30) {
                            set(COORDS_LOCAL, coords, null);
                        }
                        if (distance >= 500) {
                            set(COORDS_LOCAL, coords, null);
                            getListContactGPS(page, false);
                        }
                    } else {
                        set(COORDS_LOCAL, coords, null);
                    }
                    if (isInit) {
                        getListContactGPS(page, false);
                        return;
                    }

                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        } catch (err) {
            console.log("err", err);
        }


    }
    useEffect(() => {
        // const requestPermisstion = async (callback) => {
        //     if (Platform.OS === "android") {
        //         Permission.requestLocationPermission(res => {
        //             if (res) {
        //                 getLocationGPS(true);
        //             }
        //         })
        //     } else {
        //         await Geolocation.requestAuthorization('always').then(res => { getLocationGPS(true) });
        //     }
        // }
        if (userInfo) {
            getListContactGPS(page, false);
            // requestPermisstion();
            // const locationInterval = setInterval(() => {
            //     getLocationGPS(false);
            // }, 30000);

            // return () => {
            //     clearInterval(locationInterval)
            // }
        }

    }, [userInfo]);
    const handleLoadMore = () => {
        if (page < lastPage) {
            getListContactGPS(page + 1, true);

        }
    }
    if (isLoading) return <Loading showAbsoluteFullScreen={true} />
    return <>

        <View style={{ flexDirection: "row", width: '90%', alignSelf: 'center', alignItems: "center", marginBottom: verticalScale(15), }}>
            <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 14, lineHeight: null }}>
                今日のつながり一覧
        </Text>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center', textAlign: "center", fontSize: 20, color: AppColors.backgroundBlue, lineHeight: null }}>
                {totalRecord || 0}
            </Text>
        </View>
        { gpsContactState.length > 0 ?
            <FlatList
                refreshControl={<RefreshControl
                    onRefresh={() => {
                        setPage(1)
                        setRefreshing(true);
                        getListContactGPS(1, false)
                    }}
                    refreshing={refreshing}
                />}
                ListFooterComponent={(page < lastPage) ? <View style={{ height: 30, justifyContent: "center" }}>
                    <ActivityIndicator size="small" />
                </View> : null}
                removeClippedSubviews={true}
                maxToRenderPerBatch={30}
                updateCellsBatchingPeriod={30}
                onEndReachedThreshold={0.5}
                onEndReached={handleLoadMore}
                showsVerticalScrollIndicator={false}
                data={gpsContactState}
                renderItem={({ item, index }) => <ItemConnection type={'GPS'} item={item} />}
                contentContainerStyle={styles.contentContainerStyle}
                keyExtractor={(item, index) => index.toString()}
            /> : <ListEmpty />}
        {isLoading && <Loading showAbsoluteFullScreen={true} />}
    </>
}


const styles = StyleSheet.create({

    contentContainerStyle: {
        paddingBottom: 16,
    },

});
