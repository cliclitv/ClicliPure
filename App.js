import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from './widget/Icon/Icon'
import Home from './component/Home/Home'
import Detail from './component/Detail/Detail'
import Anime from './component/Anime/Anime'
import Ugc from './component/Ugc/Ugc'
import Search from './component/Search/Search'
import Mine from './component/Mine/Mine'
import Login from './component/Login/Login'
import { $theme } from './asset/js/const'

// const stackProps = {
//   headerMode: 'none',
//   navigationOptions: {
//     cardStyle: { backgroundColor: 'transparent' },
//     headerStyle: {
//       backgroundColor: 'transparent'
//     },
//     headerTransparent: true,
//     gesturesEnabled: false
//   },
//   headerStatusBarHeight: 0
// }

// const AnimeStack = createStackNavigator(
//   {
//     Anime: { screen: Anime },
//     Detail: { screen: Detail }
//   },
//   stackProps
// )

// const UgcStack = createStackNavigator(
//   {
//     Ugc: { screen: Ugc },
//     Detail: { screen: Detail }
//   },
//   stackProps
// )

// const HomeStack = createStackNavigator(
//   {
//     Home: { screen: Home },
//     Detail: { screen: Detail },
//     Search: { screen: Search }
//   },
//   stackProps
// )

// const MineStack = createStackNavigator(
//   {
//     Mine: { screen: Mine },
//     Login: { screen: Login }
//   },
//   stackProps
// )

// export default createAppContainer(
//   createBottomTabNavigator(
//     {
//       Home: { screen: HomeStack },
//       Anime: { screen: AnimeStack },
//       Ugc: { screen: UgcStack },
//       Mine: { screen: MineStack }
//     },
//     {
//       defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ tintColor }) => {
//           const { routeName } = navigation.state
//           const nameMap = {
//             Home: 'home',
//             Anime: 'time',
//             Ugc: 'other',
//             Mine: 'user'
//           }
//           return <Icon name={nameMap[routeName]} size={24} color={tintColor} />
//         }
//       }),
//       tabBarOptions: {
//         showLabel: false,
//         activeTintColor: $theme,
//         inactiveTintColor: '#c8cfdd',
//         style: {
//           borderTopColor: '#fff'
//         }
//       }
//     }
//   )
// )

// HomeStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true
//   if (navigation.state.index > 0) tabBarVisible = false
//   return { tabBarVisible }
// }

// UgcStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true
//   if (navigation.state.index > 0) tabBarVisible = false
//   return { tabBarVisible }
// }

// AnimeStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true
//   if (navigation.state.index > 0) tabBarVisible = false
//   return { tabBarVisible }
// }

// MineStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true
//   if (navigation.state.index > 0) tabBarVisible = false
//   return { tabBarVisible }
// }

const HomeStack = createStackNavigator()

function HomeScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen name='Details' component={Detail} />
    </HomeStack.Navigator>
  )
}

const AnimeStack = createStackNavigator()

function AnimeScreen() {
  return (
    <AnimeStack.Navigator>
      <AnimeStack.Screen name='Anime' component={Anime} />
      <AnimeStack.Screen name='Details' component={Detail} />
    </AnimeStack.Navigator>
  )
}

const UgcStack = createStackNavigator()

function UgcScreen() {
  return (
    <UgcStack.Navigator>
      <UgcStack.Screen name='Ugc' component={Ugc} />
      <UgcStack.Screen name='Details' component={Detail} />
    </UgcStack.Navigator>
  )
}

const MineStack = createStackNavigator()

function MineScreen() {
  return (
    <MineStack.Navigator>
      <MineStack.Screen name='Mine' component={Mine} />
      <MineStack.Screen name='Login' component={Login} />
    </MineStack.Navigator>
  )
}


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationNativeContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            const nameMap = {
              Home: 'home',
              Anime: 'time',
              Ugc: 'other',
              Mine: 'user'
            }
            return <Icon name={nameMap[route.name]} size={24} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: $theme,
          inactiveTintColor: '#c8cfdd'
        }}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Anime' component={Anime} />
        <Tab.Screen name='Ugc' component={Ugc} />
        <Tab.Screen name='Mine' component={Mine} />
      </Tab.Navigator>
    </NavigationNativeContainer>
  )
}
