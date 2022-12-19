import TaskCard from '../../components/TaskCard';
import PriorityCard from '../../components/Home/PriorityCard';
import HomeSearch from './../../components/Home/HomeSearch';
import HomeHeader from './../../components/Home/HomeHeader';

import { FlatList, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

import { RootTabScreenProps } from '../../types';
import { useState } from 'react';
import { useDataTask } from '../../services/dataService';
import { todoCategoriesList } from '../../constants/static';
import { isEmpty } from 'lodash';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { width } from '../../common/utils';

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'HomeScreen'>) {
  const insets = useSafeAreaInsets();

  const [serachParams, setSearchParams] = useState('');
  const { priorityData, activeData } = useDataTask();

  const isEmptyData = isEmpty(activeData);
  const isEmptyDataPriority = isEmpty(priorityData);

  return (
    <View style={[styles.container, { paddingTop: insets.top + 24 }]}>
      <HomeHeader />

      {isEmptyData ? (
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Image
            source={require('../../assets/images/empty3.png')}
            style={{ width: 220, height: 250, alignSelf: 'center' }}
          />
          <Text>Todos you add will appear here</Text>
        </View>
      ) : (
        <>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 16,
              marginLeft: 16,
            }}>
            My Priority Task
          </Text>

          {isEmptyDataPriority ? (
            <View
              style={{
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center',
                paddingVertical: 40,
              }}>
              <MaterialCommunityIcons
                name="tea"
                color={Colors.light.tint}
                size={100}
              />
              <Text style={{ marginTop: 8 }}>You don't have Priority Task</Text>
            </View>
          ) : (
            <View style={{ height: 260, width: width, paddingTop:16}}>
              <FlatList
           
                data={priorityData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  const icon = item.category
                    ? todoCategoriesList.filter(
                        obj => obj.title === item.category,
                      )
                    : null;

                  return (
                    <PriorityCard
                      id={item.id}
                      icon={icon}
                      title={item.title}
                      detail={item.detail}
                      taskDate={item.taskDate}
                      startTime={item.startTime}
                    />
                  );
                }}
              />
            </View>
          )}

          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 16,
              marginLeft: 16,
            }}>
            All Task
          </Text>

          <FlatList
            contentContainerStyle={{ paddingHorizontal: 16 }}
            style={{ marginTop: 16 }}
            data={activeData}
            renderItem={({ item }) => {
              return (
                <TaskCard
                  detail={item.detail}
                  canEdit={true}
                  id={item.id}
                  title={item.title}
                  priority={item.priority}
                  category={item.category}
                  startTime={item.startTime}
                  taskDate={item.taskDate}
                />
              );
            }}
          />
        </>
      )}
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
  rowContainer: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});
