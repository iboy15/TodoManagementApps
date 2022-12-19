import AsyncStorage from '@react-native-async-storage/async-storage';

export enum AsyncStorageKeys {
  TODOSDATA = 'TodosData',
}

type ConfigType = {
  [key in AsyncStorageKeys]: string | [];
};

let config: ConfigType = {
  [AsyncStorageKeys.TODOSDATA]: [],
};

let isInitialized = false;

export const setItem = (key: AsyncStorageKeys, value: string) => {
  if (!isInitialized) {
    throw new Error('AsyncStorage values was not initialized!');
  }
  config[key] = value;
  AsyncStorage.setItem(key, value);
};

export const getItem = (key: AsyncStorageKeys) => {
  if (!isInitialized) {
    throw new Error('AsyncStorage values was not initialized!');
  }

  return config[key];
};

export const removeItem = (key: AsyncStorageKeys) => {
  if (!isInitialized) {
    throw new Error('AsyncStorage values was not initialized!');
  }

  config[key] = [];
  AsyncStorage.removeItem(key);
};

export const initAsyncStorageValues = async () => {
  try {
    await Promise.all(
      Object.keys(config).map(async (key) => {
        config[key as AsyncStorageKeys] = await AsyncStorage.getItem(key);
      }),
    );

    isInitialized = true;
  } catch (e) {
    console.error(e);
  }
};
