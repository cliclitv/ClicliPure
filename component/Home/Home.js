import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getPost } from '../../asset/js/get'
import { $theme } from '../../asset/js/const'
import ListView from '../ListView/ListView'

export default function Home(props) {
  const [post, setPost] = useState([])
  useEffect(() => {
    getPost('', '推荐', 1, 10).then(res => {
      setPost(res.posts)
    })
  }, [])
  return (
    <View style={s.container}>
      <Text style={s.title}>推荐</Text>
      <ListView post={post} />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    color: $theme,
    // borderBottomColor: $theme,
    // borderBottomWidth: 5,
    width: 'auto'
  }
})
