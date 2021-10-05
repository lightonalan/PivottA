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
import { getListContactWebAction } from 'src/redux/actions/connectActions';
import AppColors from 'src/utils/theme/AppColors';
import { verticalScale } from 'src/utils/theme/Scale';
import ItemConnection from './ItemConnection';
import ListEmpty from './ListEmpty';
import Text from "../../../components/TextCustom"
import { useFocusEffect } from '@react-navigation/core';
export default ListContactWeb = (props) => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.loginReducer.user);
    const user_id = useSelector(state => state.loginReducer.user_id);
    const { data } = props;
    const [webContactState, setWebContactState] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false)
    const [lastPage, setLastPage] = useState(0)
    const [totalRecord, setTotalRecord] = useState(0)

    const getListContactWeb = (page, isLoadMore) => {

        const callback = {
            onSuccess: async (res) => {
                console.log("res", res);
                const { lastPage, webContacts, totalRecord } = res?.data || { webContacts: [], lastPage: 0 };
                await setLoading(false)
                await setLastPage(lastPage)
                await setTotalRecord(totalRecord)
                await setRefreshing(false)
                if (isLoadMore) {
                    setWebContactState(webContactState.concat(webContacts));
                    await setPage(page)
                    return;
                }
                setWebContactState(webContacts)
            },
            onFailed: async () => {
                await setLoading(false)
                await setRefreshing(false)
            }
        }
        const data = {
            userId: user_id,
            page
        }
        dispatch(getListContactWebAction(data, callback))
    }
    useEffect(() => {
        if (user_id) {
            // console.log(userInfo)
            getListContactWeb(page, false);
        }

    }, [user_id]);
    const handleLoadMore = () => {

        if (page < lastPage) {
            getListContactWeb(page + 1, true);

        }
    }
    if (isLoading) return <Loading showAbsoluteFullScreen={true} />
    return <>
        <View style={{ flexDirection: "row", width: '90%', alignSelf: 'center', alignItems: "center", marginBottom: verticalScale(15) }}>
            <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 14, lineHeight: null }}>
                今日のつながり一覧
        </Text>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center', textAlign: "center", fontSize: 20, color: AppColors.backgroundBlue, lineHeight: null }}>
                {totalRecord || 0}
            </Text>
        </View>
        { webContactState.length > 0 ? <FlatList
            refreshControl={<RefreshControl
                onRefresh={() => {
                    setPage(1)
                    setRefreshing(true);
                    getListContactWeb(1, false)
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
            data={webContactState}
            renderItem={({ item, index }) => <ItemConnection type={'WEB'} item={item} />}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item, index) => index.toString()}
        /> : <ListEmpty />}


    </>
}


const styles = StyleSheet.create({

    contentContainerStyle: {
        paddingBottom: 16,
    },

});
