/**
 * Wrap the AsyncStorage for latter change
 */
import { AsyncStorage } from 'react-native';

export async function get(key, callback) {
  const result = await AsyncStorage.getItem(key, callback);
  return result;
}

export async function set(key, param, callback) {
  const isString = typeof param === 'string';
  const value = isString ? param : JSON.stringify(param);
  await AsyncStorage.setItem(key, value, callback);
}

export async function remove(key, callback) {
  await AsyncStorage.removeItem(key, callback);
}
