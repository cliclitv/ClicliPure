import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Home(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button title='Go to Details' onPress={() => props.navigation.navigate('Details')} />
    </View>
  )
}
