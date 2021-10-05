import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import HeaderBack from 'src/components/HeaderBack';
import componentNames from 'src/utils/constant/componentNames';
import { scale } from 'src/utils/theme/Scale';
import CreateTopicModal from './components/CreateTopicModal';
import FloattingButton from './components/FloattingButton';
import NoticeItem from './components/NoticeItem';

export default NoticeBoardScreen = () => {
    const route = useRoute();
    const { navigate } = useNavigation()
    const [visibleCreateTopic, setVisibleCreateTopic] = useState(false)
    const data = [1, 2, 3];
    const onViewReplyPress = () => {
        navigate(componentNames.COMMENT_NOTICE_SCREEN, {})
    }
    return <>
        <HeaderBack
            headerName={'掲示板'}
            renderLeft={null}
            renderRight={<View style={{ width: 23 }} />}
        />
        <FlatList
            {...{ data }}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            removeClippedSubviews={true}
            maxToRenderPerBatch={30}
            updateCellsBatchingPeriod={30}
            renderItem={(item) => <NoticeItem showLine={item.index < data.length - 1} {...{ item }} onPress={onViewReplyPress} />}
            contentContainerStyle={styles.container}
            keyExtractor={(item, index) => index.toString()}
        />
        <FloattingButton onPress={() => {
            setVisibleCreateTopic(true)
        }} />
        <CreateTopicModal onClose={() => setVisibleCreateTopic(false)} visible={visibleCreateTopic} />
    </>
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
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