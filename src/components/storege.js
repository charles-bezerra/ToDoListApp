import AsyncStorage from '@react-native-community/async-storage';

export default class Storege {
    async storeData (id, value) {
        try {
            await AsyncStorage.setItem(id, value);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    async getData (id) {
        try {
            const data = await AsyncStorage.getItem(id);
            return data;
        } catch(e) {
            console.log(e);
        }
    }

    async multiSetData (datas) {
        try {
            await AsyncStorage.multiSet(datas);
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }


    async clear () {
        try {
            await AsyncStorage.clear();
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }
}
