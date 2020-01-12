import React from 'react'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { View } from 'react-native'

export default function Player({ url, type }) {
  const m = type === 'hls' ? 'm3u8' : type
  const a = (
    <Video
      source={{ uri: url, overrideFileExtensionAndroid: m }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode='cover'
      shouldPlay
      isLooping
      style={{ width: '100%', height: '100%' }}
    />
  )
  // const b = (
  //   <VideoPlayer
  //     videoProps={{
  //       shouldPlay: true,
  //       resizeMode: Video.RESIZE_MODE_CONTAIN,
  //       source: {
  //         uri: url
  //       }
  //     }}
  //     inFullscreen={true}
  //     sliderColor='#a10cff'
  //     height={230}
  //   />
  // )
  return a
}
