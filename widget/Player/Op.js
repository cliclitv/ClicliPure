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
  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState(0)
  const play = () => {
    isPlay ? v.current.pauseAsync() : v.current.playAsync()
    setPlay(!isPlay)
  }
  const full = () => {
    if (isFull) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
    }
    setFull(!isFull)
  }
  const back = () => {
    if (isFull) {
      full()
    } else {
      callback.back && callback.back()
    }
    setFull(!isFull)
  }
  const update = ({ positionMillis, durationMillis }) => {
    setDuration(durationMillis)
    setPosition(positionMillis)
  }
  useEffect(() => {
    update()
  }, [])
  return (
    <TouchableOpacity style={isFull ? s.full : s.unfull}>
      <Icon name={'back'} size={20} color={'#fff'} onPress={back} style={s.back} />
      <View style={s.control}>
        <Icon name={isPlay ? 'pause' : 'play'} size={20} color={'#fff'} onPress={play} />
        <Text>{timefy(position)}</Text>
        <Slider
          style={{ height: 40, flex: 1 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={themeColor}
          maximumTrackTintColor='rgba(255,255,255,0.5)'
          thumbTintColor={themeColor}
        />
        <Text>{timefy(duration)}</Text>
        <Icon name={'full'} size={20} color={'#fff'} onPress={full} />
      </View>
      <Video
        source={source || {}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode='cover'
        shouldPlay
        isLooping
        style={s.wrap}
        ref={v}
        onPlaybackStatusUpdate={update}
      />
    </TouchableOpacity>
  )
}

const timefy = millis => {
  const totalSeconds = millis / 1000
  const seconds = String(Math.floor(totalSeconds % 60))
  const minutes = String(Math.floor(totalSeconds / 60))
  return minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0')
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
