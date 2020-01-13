import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from './widget/Icon/Icon'
import Home from './component/Home/Home'
import Detail from './component/Detail/Detail'
import Anime from './component/Anime/Anime'
import Ugc from './component/Ugc/Ugc'
import Me from './component/Me/Me'
import { $theme } from './asset/js/const'

const stackProps = {
  headerMode: 'none',
  navigationOptions: {
    cardStyle: { backgroundColor: 'transparent' },
    headerStyle: {
      backgroundColor: 'transparent'
    },
    headerTransparent: true,
    gesturesEnabled: false
  },
  headerStatusBarHeight: 0
}
const Home = createStackNavigator(
  {
    Home: { screen: Home },
    Detail: { screen: Detail }
  },
  stackProps
)

const Anime = createStackNavigator(
  {
    Anime: { screen: Anime },
    Detail: { screen: Detail }
  },
  stackProps
)

const Ugc = createStackNavigator(
  {
    Ugc: { screen: Ugc },
    Detail: { screen: Detail, headerMode: 'screen' }
  },
  stackProps
)

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: Home },
      Anime: { screen: Anime },
      Ugc: { screen: Ugc },
      Me: { screen: Me }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state
          const nameMap = {
            Home: 'home',
            Anime: 'time',
            Ugc: 'other',
            Me: 'user'
          }
          return <Icon name={nameMap[routeName]} size={24} color={tintColor} />
        }
      }),
      tabBarOptions: {
        showLabel: false,
        activeTintColor: $theme,
        inactiveTintColor: '#c8cfdd',
        style: {
          borderTopColor: '#fff'
        }
      }
    }
  )
)
