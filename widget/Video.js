import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

export default function App() {
  return (
    <View style={styles.container}>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: 'https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/3_d97abb65fc36a1d689efd3a105bebce1.mp4'
          }
        }}
        inFullscreen={true}
        sliderColor='#a10cff'
        height={337}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
