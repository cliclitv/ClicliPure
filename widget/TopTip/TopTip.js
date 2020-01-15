import React from 'react'
import { View, Text, StatusBar } from 'react-native'

export default function TopTip({ bg, color = '#fff', text }) {
  return (
    <View
      style={{
        position: 'absolute',
        height: 40,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: bg,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        padding: 20
      }}
    >
      <Text style={{ color }}>{text}</Text>
    </View>
  )
}
