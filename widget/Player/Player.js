import React from 'react'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

export default function Player({ url }) {
//   const a = <Video
//   source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
//   rate={1.0}
//   volume={1.0}
//   isMuted={false}
//   resizeMode="cover"
//   shouldPlay
//   isLooping
//   style={{ width: 300, height: 300 }}
// />
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
