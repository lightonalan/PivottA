
import React, { useEffect, useRef, useState, memo } from 'react';
import { View, FlatList, StyleSheet, Text, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';
import ReplyArrow from 'src/assets/Icons/ReplyArrow';
import images from 'src/assets/images';

import { scale } from 'src/utils/theme/Scale';

export default NoticeItem = memo((props) => {
    const { item, index } = props.item || {};
    const { onPress, showLine } = props;
    return <>
        <View style={styles.item}>
            <View style={styles.itemHeader}>
                <FastImage
                    source={images.imagePicker}
                    resizeMode={'cover'}
                    style={styles.avatar}
                />
                <View style={{ flex: 1, justifyContent: "space-around" }}>
                    <View style={{ flexDirection: "row", }}>
                        <View style={{ flexDirection: "row", flex: 1 }}>
                            <Text style={{ marginRight: scale(8), fontSize: 10 }}>株式会社Resume</Text>
                            <Text style={{ fontSize: 10 }}>営業部長</Text>
                        </View>
                        <Text style={{ opacity: 0.64, fontSize: 10 }}>1時間前</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '700'
                        }}>野村  あかり</Text>
                    </View>
                </View>
            </View>
            <View style={styles.itemContent}>
                <Text style={{
                    lineHeight: 20,
                    fontSize: 14
                }}>トピック名が入りますトピック名が入りますトピック名が入りますトピック名が入りますトピック名が入りますトピック名が入りますトピック名が入ります</Text>
            </View>
            <View style={styles.itemFooter}>
                <ReplyArrow style={{ marginTop: scale(35) / 2 - 9 }} />
                <FastImage
                    source={images.imagePicker}
                    resizeMode={'cover'}
                    style={styles.replyAvatar}

                />
                <View style={{ flex: 1 }}>
                    <Text style={{
                        color: '#78788C',
                        fontSize: 12,
                        lineHeight: 20
                    }}>
                        返信が入ります返信が入ります返信が入ります返信が入ります
                    </Text>
                    <Text
                        onPress={onPress}
                        style={{
                            color: '#004FAC',
                            marginTop: scale(6)
                        }}>
                        他12件
                    </Text>
                </View>
            </View>

        </View>

        {showLine && <View style={styles.line} />}
    </>
})
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