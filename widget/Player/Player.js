import React from 'react'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Dimensions } from 'react-native'

export default function Player({ url, type }) {
  const { width } = Dimensions.get('window')
  const height = (width * 9) / 16
  const m = type === 'hls' ? 'm3u8' : type
  console.log(url,m)
  const a = (
    <Video
      source={{ uri: url, overrideFileExtensionAndroid: m }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode='cover'
      shouldPlay
      isLooping
      style={{ width, height }}
    />
  )
  const b = (
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
  return a
}
