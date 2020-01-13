import React from 'react'
import Oplayer from './Op'
import { $theme } from '../../asset/js/const'

export default function Player({ url, type, back }) {
  const m = type === 'hls' ? 'm3u8' : type
  return <Oplayer url={url} type={m} themeColor={$theme} callback={{ back }} />
}
