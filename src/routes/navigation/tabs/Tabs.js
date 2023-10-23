import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, ProfileNavigator } from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Strona Główna':
            return (
              <FontIcon
                name="film"
                color={focused ? colors.red : colors.gray}
                size={20}
                solid
              />
            )
          case 'Logowanie':
            return (
              <FontIcon
                name="user"
                color={focused ? colors.red : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.red,
      inactiveTintColor: colors.gray,
      style: {
         backgroundColor: '#171717',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
         paddingBottom: 3,
         paddingTop: 5,
      },
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Strona Główna" component={HomeNavigator} />
    <Tab.Screen name="Logowanie" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
