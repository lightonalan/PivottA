import { useRoute } from '@react-navigation/core';
import React, { useEffect, useRef, useState, memo } from 'react';
import { View, FlatList, StyleSheet, Text, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


import ReplyArrow from 'src/assets/Icons/ReplyArrow';
import images from 'src/assets/images';
import HeaderBack from 'src/components/HeaderBack';
import AppColors from 'src/utils/theme/AppColors';
import { scale } from 'src/utils/theme/Scale';
import CommentItem from './components/CommentItem';
import CreateTopicModal from './components/CreateTopicModal';
import FloattingButton from './components/FloattingButton';
import InputComment from './components/InputComment';




export default CommentNoticeScreen = () => {
    const data = [1, 2, 2];
    const [comment, setComent] = useState('');
    const refList = useRef(null)
    return <View style={{ flex: 1, backgroundColor: "white", }}>
        <HeaderBack
            headerName={'トピック名'}
            renderLeft={null}
            renderRight={<View style={{ width: 23 }} />}
        />
        <KeyboardAvoidingView enable={Platform.OS === "ios"} style={{ flex: 1 }} behavior="padding" >
            <View style={{ flex: 1, }}>
                <FlatList
                    ref={refList}
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.5}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={30}
                    updateCellsBatchingPeriod={30}
                    data={data}
                    renderItem={(item) => <CommentItem showLine={item.index < data.length - 1} {...{ item }} />}
                    contentContainerStyle={styles.container}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <InputComment
                onFocus={() => {
                    setTimeout(() => {
                        refList?.current?.scrollToEnd()
                    }, 500)
                }}
                onSend={(text) => {

                }} />
        </KeyboardAvoidingView>
        <SafeAreaView style={{ backgroundColor: AppColors.white }} />


    </View>
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,

        paddingBottom: scale(40)
    },
    item: {
        padding: scale(12),
        width: "100%",
        marginVertical: 10,

    },
    itemHeader: {
        flexDirection: "row",

    },
    itemContent: {
        marginVertical: scale(15)
    },
    itemFooter: {
        flexDirection: "row",
        marginTop: 10
    },
    avatar: {
        height: scale(50),
        width: scale(50),
        marginRight: scale(8)
    },
    replyAvatar: {
        height: scale(35),
        width: scale(35),
        marginHorizontal: scale(8),

    },
    line: { height: 1, width: "100%", backgroundColor: "#D8D6E2", marginHorizontal: 0 }

})