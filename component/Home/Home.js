import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { getPost } from '../../asset/js/get'
import { $theme } from '../../asset/js/const'
import ListView from '../ListView/ListView'

export default function Home(props) {
  const [post, setPost] = useState([])
  useEffect(() => {
    getPost('bgm', '', 1, 10).then(res => {
      setPost(res.posts)
    })
  }, [])
  return (
    <View style={s.container}>
      <StatusBar barStyle={'dark-content'} translucent={true} backgroundColor='transparent' />
      <Text style={{ paddingLeft: 10, paddingBottom: 10 }}>
        <Text style={s.title}> 推荐 </Text>
        <Text style={s.active}> 最新 </Text>
      </Text>
      <ListView post={post} />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  active: {
    fontSize: 24,
    color: $theme,
    margin: 20
  },
  title: {
    fontSize: 18,
    paddingLeft: 20
  }
})
