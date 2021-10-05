import { PermissionsAndroid } from "react-native";

const requestLocationPermission = async (callback) => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (granted) {
            console.log("You can use the ACCESS_FINE_LOCATION")
            callback(true)
        }
        else {
            callback(false)
            console.log("ACCESS_FINE_LOCATION permission denied")
        }
    } catch (err) {
        callback(false)
        console.log(err);
    }

}
const requestInternalPermission = async (callback) => {

    const gr = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    if (!gr) {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the WRITE_EXTERNAL_STORAGE");
                callback(true)
            } else {
                callback(false)
                console.log("Storage permission failed");
            }
        } catch (err) {
            console.warn(err);
        }
    } else {
        callback(true)
    }

};
export default {
    requestLocationPermission,
    requestInternalPermission
}