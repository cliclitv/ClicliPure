import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { getPost } from '../../asset/js/get'
import { $theme } from '../../asset/js/const'
import ListView from '../ListView/ListView'

let page = 1
export default function Home(props) {
  const [post, setPost] = useState([])
  useEffect(() => {
    getPost('原创', '', page, 10).then(res => setPost(res.posts))
  }, [])
  const end = () => {
    page++
    getPost('原创', '', page, 10).then(res => setPost(post.concat(res.posts)))
  }
  return (
    <View style={s.container}>
      <Text style={s.title}> UGC </Text>
      <ListView data={post} push={props.navigation.navigate} end={end} />
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
