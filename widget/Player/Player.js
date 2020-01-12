import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

export default function Player({ url }) {
  return (
    <VideoPlayer
      videoProps={{
        shouldPlay: true,
        resizeMode: Video.RESIZE_MODE_CONTAIN,
        source: {
          uri: url
        }
      }}
      inFullscreen={true}
      sliderColor='#a10cff'
      height={230}
    />
  )
}
