import React from 'react'
import { Video } from 'expo-av'

export default function Player(props) {
  return (
    <Video
      source={props.source}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode='cover'
      shouldPlay
      isLooping
      style={{ width: '100%', height: '100%' }}
    />
  )
}
