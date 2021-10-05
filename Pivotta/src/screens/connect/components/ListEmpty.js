
import { useNavigation } from '@react-navigation/core';
import React, { useState, memo } from 'react';
import {
    View,

    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
} from 'react-native';
import images from 'src/assets/images';
import componentNames from 'src/utils/constant/componentNames';
import { moderateScale, scale, verticalScale } from 'src/utils/theme/Scale';
import TimeConverter from 'src/utils/TimeConverter';
import Text from "../../../components/TextCustom"
import ConnectionEmpty from "src/assets/Icons/ConnectionEmpty";
const { height, width } = Dimensions.get("window")
export default ListEmpty = (props) => {
    const { content1, content2 } = props;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: scale(height / 4) }}>
            <ConnectionEmpty />
            <Text style={
                {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: "#283C50",
                    marginTop: scale(15),
                    textAlign: "center"
                }

            }>
                {content1 ? content1 : "今日つながった人がいません。"}


            </Text>
            <Text style={
                {
                    fontWeight: '400',
                    fontSize: 12,
                    color: "#283C50",
                    marginTop: 0,
                    textAlign: "center"
                }

            }>
                {content2 ? content2 : "明日以降、再度ご確認ください。"}

            </Text>
        </View>
    );
};


const styles = StyleSheet.create({




});
