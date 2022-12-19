import { Dimensions, NativeModules, Platform } from "react-native";

export const IS_ANDROID = Platform.OS === 'android'


const { StatusBarManager } = NativeModules;

export const statusBarHeight =
  StatusBarManager.HEIGHT < 10 ? 47 : StatusBarManager.HEIGHT;

  export const { height, width } = Dimensions.get('screen');