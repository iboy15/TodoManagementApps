import { FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import { Text, View } from '../../components/Themed';
import DeletedTab from '../../components/History/DeletedTab';
import FinishedTab from '../../components/History/FinishedTab';
import Colors from '../../constants/Colors';


export default function HistoryScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top  },
      ]}>
      <Tab.Navigator screenOptions={{
        tabBarIndicatorStyle:{backgroundColor:Colors.light.tint}
      }}>
        <Tab.Screen name="Finished" component={FinishedTab} />
        <Tab.Screen name="Deleted" component={DeletedTab} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
