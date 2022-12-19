/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather, FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName,  TouchableOpacity,StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import CreateTodoScreen from '../screens/CreateTodo/CreateTodoScreen'

import HomeScreen from '../screens/Home/HomeScreen'
import HistoryScreen from '../screens/History/HistoryScreen'

import LinkingConfiguration from './LinkingConfiguration'
import { RootStackParamList, RootTabParamList } from '../types'

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
        options={{ title: 'Create new Task' }}
        name='CreateTodoScreen' component={CreateTodoScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

const CreateTodoComponent = () => {
  return null
}

function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          tabBarStyle: { paddingTop: 8 },
          headerShown: false,
          tabBarShowLabel:false,
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='CreateTodoBtn'
        component={CreateTodoComponent}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => navigation.navigate('CreateTodoScreen')}
            >
              <Feather name='plus' size={32} color={'white'} />
            </TouchableOpacity>
          ),
        })}
      />
      <BottomTab.Screen
        name='HistoryScreen'
        component={HistoryScreen}
        options={{
          tabBarStyle: { paddingTop: 8 },
          headerShown: false,
          tabBarShowLabel:false,
          tabBarIcon: ({ color }) => <TabBarIcon name='history' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}


const styles = StyleSheet.create({
  plusButton:{
    height: 50,
    width: 50,
    backgroundColor: Colors.light.secondary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.light.secondary,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,

    elevation: 5,
  }
})