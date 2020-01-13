import React, { useState, useRef } from 'react'
import { StyleSheet, View, Dimensions, Slider, Text, TouchableOpacity, BackHandler } from 'react-native'
import { Video } from 'expo-av'
import { ScreenOrientation } from 'expo'
import Icon from './Icon'

const { width, height } = Dimensions.get('window')
const autoHeight = (width * 9) / 16

export default function Player({ source, themeColor, callback }) {
  const v = useRef(null)
  const [isPlay, setPlay] = useState(true)
  const [isFull, setFull] = useState(false)
  const play = () => {
    isPlay ? v.current.pauseAsync() : v.current.playAsync()
    setPlay(!isPlay)
  }
  const full = async () => {
    if (isFull) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
    }
    setFull(!isFull)
  }
  return (
    <TouchableOpacity style={isFull ? s.full : s.unfull}>
      <Icon name={'back'} size={20} color={'#fff'} onPress={full} style={s.back} />
      <View style={s.control}>
        <Icon name={isPlay ? 'pause' : 'play'} size={20} color={'#fff'} onPress={play} />
        <Slider
          style={{ height: 40, flex: 1 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={themeColor}
          maximumTrackTintColor='rgba(255,255,255,0.5)'
          thumbTintColor={themeColor}
        />
        <Icon name={'full'} size={20} color={'#fff'} onPress={full} />
      </View>
      <Video source={source} rate={1.0} volume={1.0} isMuted={false} resizeMode='cover' shouldPlay isLooping style={s.wrap} ref={v} />
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%'
  },
  control: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9,
    bottom: 10,
    left: 15,
    right: 15
  },
  full: {
    width: height,
    height: width
  },
  unfull: {
    width,
    height: autoHeight
  },
  back: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 9999
  }
})
