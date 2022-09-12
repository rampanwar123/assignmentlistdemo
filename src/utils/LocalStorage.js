import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 *
 * @param {*} key - key of data to store.
 * @param {*} value - value of data to store.
 */
export const storeData = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('error store in async storage', e);
    return false;
  }
};

/**
 *
 * @param {*} key - key of data to store.
 */
export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.log('error get from async storage', e);
    return false;
  }
};

/**
 *
 * @param {*} key - key of data to remove.
 */
export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('error get from async storage', e);
    return false;
  }
};

/**
 *
 * Clear all data from AsyncStorage
 */
export const clearAll = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (e) {
    console.log('error clear async storage', e);
    return false;
  }
};

/**
 *
 * @param {*} keys - Array of keys to remove from AsyncStorage.
 */
export const removeMultiData = async keys => {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    console.log('error clear async storage', e);
    return false;
  }
};
