import React, { useState, useRef, useEffect, useCallback, memo } from 'react'
import { StyleSheet, View, Dimensions, Slider, Text, TouchableHighlight, ActivityIndicator } from 'react-native'
import Video from 'react-native-video'
import Icon from './Icon'
import Orientation from 'react-native-orientation'
const { width, height } = Dimensions.get('window')
const autoHeight = (width * 9) / 16

function Player({ url, themeColor = '#946ce6', type = 'mp4', callback }) {
  if (!url) return <ActivityIndicator color={themeColor} size={30} style={ s.unfull }></ActivityIndicator>
  let v = useRef(null)
  let timer = null
  const [isPlay, setPlay] = useState(true)
  const [isFull, setFull] = useState(false)
  const [control, setControl] = useState(false)
  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    return () => {
      Orientation.lockToPortrait()
    }
  }, [])

  const play = useCallback(() => {
    setPlay(!isPlay)
  })
  const full = useCallback(() => {
    if (isFull) {
      Orientation.lockToPortrait()
    } else {
      Orientation.lockToLandscapeLeft()
    }
    setFull(!isFull)
  })
  const back = useCallback(() => (isFull ? full() : callback.back && callback.back()))

  const load = ({ duration }) => {
    setDuration(duration)
  }

  const progress = ({ currentTime }) => {
    setPosition(currentTime)
  }

  const value = useCallback(value => {
    v.current.seek(value * duration)
    setPlay(true)
  })
  const show = useCallback(() => {
    clearTimeout(timer)
    setControl(true)
    timer = setTimeout(() => setControl(false), 5000)
  })

  const c = control ? { opacity: 1 } : { opacity: 0 }
  return (
    <View style={isFull ? s.full : s.unfull}>
      <Icon name={'back'} size={20} color={'#fff'} onPress={back} style={{ ...c, ...s.back }} />
      <TouchableHighlight onPress={show} style={s.mark}>
        <View style={{ ...c, ...s.control }}>
          <Icon name={isPlay ? 'pause' : 'play'} size={20} color={'#fff'} onPress={play} style={s.icon} />
          <Text style={s.text}>{timefy(position)}</Text>
          <Slider
            value={duration && position ? position / duration : 0}
            style={{ height: 40, flex: 1 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={themeColor}
            maximumTrackTintColor='rgba(255,255,255,0.5)'
            thumbTintColor={themeColor}
            onValueChange={() => setPlay(false)}
            onSlidingComplete={value}
          />
          <Text style={s.text}>{timefy(duration)}</Text>
          <Icon name={'full'} size={20} color={'#fff'} onPress={full} style={s.icon} />
        </View>
      </TouchableHighlight>

      <Video
        source={{ uri: url }}
        style={isFull ? s.full : s.unfull}
        ref={v}
        onLoad={load}
        onProgress={progress}
        paused={!isPlay}
        resizeMode={'contain'}
        progressUpdateInterval={250.0}
        playWhenInactive={true}
        playInBackground={false}
        onPress={() => {}}
      />
    </View>
  )
}

export default memo(Player)

const timefy = time => {
  if (!time) return '00:00'
  let h = Math.floor(time / 3600)
  let m = Math.floor((time % 3600) / 60)
  let s = Math.floor(time % 60)
  h = h >= 10 ? h : '0' + h
  m = m >= 10 ? m : '0' + m
  s = s >= 10 ? s : '0' + s
  return h === '00' ? m + ':' + s : h + ':' + m + ':' + s
}

const s = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%'
  },
  mark: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999
  },
  control: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    bottom: 10
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
  },
  icon: {
    margin: 10
  },
  text: {
    color: '#fff'
  }
})
