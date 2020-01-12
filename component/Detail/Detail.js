import React from 'react'
import { Text, View, StatusBar, StyleSheet } from 'react-native'
import Player from '../../widget/Player/Player'

export default function Detail(props) {
  return (
    <View style={s.container}>
      <StatusBar barStyle={'dark-content'} hidden={true} backgroundColor='transparent' animated={true} />
      <Player url={'https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/3_d97abb65fc36a1d689efd3a105bebce1.mp4'} />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
})
