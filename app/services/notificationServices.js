import messaging from '@react-native-firebase/messaging';
import HomeAction from '../actions/HomeAction';
import { store } from '../stores';
export const NotificationHandler = () => {
    checkPermission();
};

async function checkPermission() {
    const enabled = await messaging().hasPermission();
    if (enabled) {
        getToken();
    } else {
        requestPermission();
    }
}
async function getToken() {
    let fcmToken = await messaging().getToken();
    // globals.fcmToken = fcmToken;
    console.log('Fcm Token --->', fcmToken);
    const data = {
        app_token: fcmToken
    }
    if (store.getState().AuthReducer.access_token) {
        store.dispatch(HomeAction.onUpdateAppToken(data, () => {
            console.log('Update FCM token')
        }))
    }
}
async function requestPermission() {
    try {
        await messaging().requestPermission();
        getToken();
    } catch (error) {
        console.log('permission rejected');
    }
}

