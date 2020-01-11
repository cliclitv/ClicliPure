import React from 'react'
import { Button, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button title='Go to Settings' onPress={() => this.props.navigation.navigate('Settings')} />
        <Button title='Go to Details' onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    )
  }
}

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
  Home: { screen: HomeScreen },
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
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state
          let iconName
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`
          } else if (routeName === 'Settings') {
            iconName = `ios-options${focused ? '' : '-outline'}`
          }
          return <Ionicons name={iconName} size={25} color={tintColor} />
        }
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }
    }
  )
)
