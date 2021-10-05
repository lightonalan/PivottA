import { StyleSheet } from 'react-native';
import AppColors from 'src/utils/theme/AppColors';
import { scale, moderateScale } from 'src/utils/theme/Scale';

export const styles = StyleSheet.create({
    container: {
    },
    labelView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scale(8),
    },
    labelText: {
        fontSize: scale(12),
        color: AppColors.black,
        marginRight: scale(7),
    },
    requireText: {
        fontSize: scale(10),
        color: AppColors.textRed,
    },
    pickerSelectStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    unit: {
        fontSize: moderateScale(14),
        lineHeight: 28,
        color: AppColors.black,
        paddingLeft: scale(7),
        paddingRight : scale(10)
    },
    icon: {
        resizeMode: 'contain',
        width: scale(10),
        height: scale(10)
    },
    pickerContainer : {
     
        height: scale(40),
        borderWidth : 0.5,
        borderColor : AppColors.bgGreyButton
    },
    dropDownStyles : {
        fontSize : moderateScale(20),
        borderWidth : 0.5,
        borderColor : AppColors.bgGreyButton,
    }
});
