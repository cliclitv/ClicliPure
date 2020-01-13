import React, { useState, useRef } from 'react'
import { StyleSheet, View, Dimensions, Slider, Text, TouchableOpacity } from 'react-native'
import { Video } from 'expo-av'
import Icon from './Icon'

export default function Player({ source, themeColor }) {
  const v = useRef(null)
  const [isPlay, setPlay] = useState(true)
  const play = () => {
    if (isPlay) {
      v.current.pauseAsync()
    } else {
      v.current.playAsync()
    }
    setPlay(!isPlay)
  }
  return (
    <View>
      <View style={s.control}>
        <Icon name={'play'} size={20} color={'#fff'} onPress={play} />
        <Slider
          style={{ height: 40, flex: 1 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={themeColor}
          maximumTrackTintColor='rgba(255,255,255,0.5)'
          thumbTintColor={themeColor}
        />
        <Icon name={'full'} size={20} color={'#fff'} />
      </View>
      <Video source={source} rate={1.0} volume={1.0} isMuted={false} resizeMode='cover' shouldPlay isLooping style={s.wrap} ref={v} />
    </View>
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
  }
})
