import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { getPost } from '../../asset/js/get'
import { $theme } from '../../asset/js/const'
import ListView from '../ListView/ListView'
import Icon from '../../widget/Icon/Icon'

export default function Home(props) {
  const [tab, setTab] = useState(true)
  const [post, setPost] = useState([])
  useEffect(() => {
    const p = tab ? getPost('', '推荐', 1, 10) : getPost('bgm', '', 1, 10)
    p.then(res => setPost(res.posts))
  }, [tab])
  return (
    <View style={s.container}>
      <StatusBar barStyle={'dark-content'} translucent={true} backgroundColor='transparent' animated={true} />
      <Text style={{ paddingLeft: 20, paddingBottom: 10 }}>
        <Text style={tab ? s.active : s.title} onPress={() => setTab(true)}>
          {' '}
          推荐{' '}
        </Text>
        <Text style={tab ? s.title : s.active} onPress={() => setTab(false)}>
          {' '}
          最新{' '}
        </Text>
      </Text>
      <Icon name={'search'} size={24} color={$theme} style={s.search} onPress={() => props.navigation.navigate('Search')} />
      <ListView data={post} push={props.navigation.navigate} />
    </View>
  )
}

export const s = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    flex: 1
  },
  active: {
    fontSize: 24,
    color: $theme,
    margin: 20
  },
  title: {
    fontSize: 18,
    paddingLeft: 20
  },
  search: {
    position: 'absolute',
    right: 20,
    top: 35
  }
})
