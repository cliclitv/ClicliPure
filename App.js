import React from 'react'
import { Button, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from './widget/Icon/Icon'
import Home from './component/Home/Home'


class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button title='Go to Home' onPress={() => this.props.navigation.navigate('Home')} />
        <Button title='Go to Details' onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  Home: { screen: Home },
  Details: { screen: DetailsScreen }
})

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen }
})

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      Settings: { screen: SettingsStack }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state
          let iconName
          if (routeName === 'Home') {
            iconName = 'home'
          } else if (routeName === 'Settings') {
            iconName = 'other'
          }
          return <Icon name={iconName} size={32} color={tintColor} />
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
