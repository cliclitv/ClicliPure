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

const stackProps = {
  headerMode: 'none',
  navigationOptions: {
    cardStyle: {
      shadowColor: 'transparent',
      backgroundColor: 'transparent'
    }
  }
}
const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Detail }
  },
  stackProps
)

const AnimeStack = createStackNavigator(
  {
    Anime: { screen: Anime },
    Details: { screen: Detail }
  },
  stackProps
)

const UgcStack = createStackNavigator(
  {
    Ugc: { screen: Ugc },
    Details: { screen: Detail }
  },
  stackProps
)

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      Anime: { screen: AnimeStack },
      Ugc: { screen: UgcStack },
      Me: { screen: Me }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state
          const nameMap = {
            Home: 'home',
            Anime: 'tv',
            Ugc: 'other',
            Me: 'user'
          }
          return <Icon name={nameMap[routeName]} size={32} color={tintColor} />
        }
      }),
      tabBarOptions: {
        showLabel: false,
        activeTintColor: '#946ce6',
        inactiveTintColor: '#c8cfdd',
        style: {
          borderTopColor: '#fff',
          margin: 10
        }
      }
    }
  )
)
