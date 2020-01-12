import React from 'react'
import { Video } from 'expo-av'
import Oplayer from './Op'

export default function Player({ url, type }) {
  const m = type === 'hls' ? 'm3u8' : type
  return <Oplayer source={{ uri: url, overrideFileExtensionAndroid: m }} />
}
