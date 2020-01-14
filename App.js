import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from './widget/Icon/Icon'
import Home from './component/Home/Home'
import Detail from './component/Detail/Detail'
import Anime from './component/Anime/Anime'
import Ugc from './component/Ugc/Ugc'
import Search from './component/Search/Search'
import Mine from './component/Mine/Mine'
import Login from './component/Login/Login'
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

const AnimeStack = createStackNavigator(
  {
    Anime: { screen: Anime },
    Detail: { screen: Detail }
  },
  stackProps
)

const UgcStack = createStackNavigator(
  {
    Ugc: { screen: Ugc },
    Detail: { screen: Detail }
  },
  stackProps
)

const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },
    Detail: { screen: Detail },
    Search: { screen: Search }
  },
  stackProps
)

const MineStack = createStackNavigator(
  {
    Mine: { screen: Mine },
    Login: { screen: Login }
  },
  stackProps
)

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      Anime: { screen: AnimeStack },
      Ugc: { screen: UgcStack },
      Me: { screen: MineStack }
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

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) tabBarVisible = false
  return { tabBarVisible }
}

UgcStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) tabBarVisible = false
  return { tabBarVisible }
}

AnimeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) tabBarVisible = false
  return { tabBarVisible }
}

MineStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) tabBarVisible = false
  return { tabBarVisible }
}
