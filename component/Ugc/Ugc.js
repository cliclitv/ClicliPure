import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { getPost } from '../../asset/js/get'
import { $theme } from '../../asset/js/const'
import ListView from '../ListView/ListView'

export default function Home(props) {
  const [post, setPost] = useState([])
  useEffect(() => {
    getPost('原创', '', 1, 10).then(res => setPost(res.posts))
  }, [])
  return (
    <View style={s.container}>
      <StatusBar barStyle={'dark-content'} translucent={true} backgroundColor='transparent' />
      <Text style={s.title}> UGC </Text>
      <ListView data={post} />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    flex: 1
  },
  title: {
    fontSize: 24,
    color: $theme,
    paddingLeft: 20,
    paddingBottom: 10
  }
})
