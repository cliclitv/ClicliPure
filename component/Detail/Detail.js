import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, StyleSheet, Image, ScrollView } from 'react-native'
import Player from '../../widget/Player/Player'
import { $theme } from '../../asset/js/const'
import { getAvatar } from '../../asset/js/util'
import { getPostDetail, getVideoList } from '../../asset/js/get'

export default function Detail(props) {
  const gv = props.navigation.getParam('gv')
  const [post, setPost] = useState(null)
  const [video, setVideo] = useState(null)
  const [content, setContent] = useState(null)
  useEffect(() => {
    getPostDetail(gv).then(res => setPost(res.result))
    getVideoList(gv).then(res => setVideo(res.videos))
  }, [])
  return (
    post && (
      <View style={s.container}>
        <StatusBar barStyle={'dark-content'} hidden={true} backgroundColor='transparent' animated={true} />
        <Player url={'https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/3_d97abb65fc36a1d689efd3a105bebce1.mp4'} />
        <View style={s.tab}>
          <View style={s.item}>
            <Text style={s.active}>简介</Text>
          </View>
          <View style={s.item}>
            <Text style={s.text}>评论</Text>
          </View>
        </View>
        <ScrollView style={s.info}>
          <Text style={s.title}>{post.title}</Text>
          <Text style={s.time}>
            gv {gv} {post.time}
          </Text>
          <View style={s.user}>
            <Image source={{ uri: getAvatar(post.uqq) }} style={s.avatar} />
            <Text style={s.name}>{post.uname}</Text>
          </View>
          <View style={s.list}>
            {video &&
              video.map(item => (
                <View key={item.id} style={s.card}>
                  <Text style={s.content}>{item.oid}</Text>
                  <Text style={s.content}>{item.title}</Text>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    )
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  tab: {
    flex: 1,
    height: 50,
    flexDirection: 'row'
  },
  text: {
    textAlign: 'center',
    padding: 10
  },
  active: {
    textAlign: 'center',
    color: $theme,
    borderBottomWidth: 3,
    borderBottomColor: $theme,
    padding: 10
  },
  item: {
    width: '50%',
    textAlign: 'center'
  },
  info: {
    marginTop: 45,
    height: 480
  },
  title: {
    padding: 20,
    fontSize: 18,
    paddingBottom: 0
  },
  time: {
    fontSize: 12,
    color: '#666',
    paddingBottom: 10,
    paddingLeft: 20
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  name: {
    lineHeight: 40,
    paddingLeft: 10
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20
  },
  card: {
    padding: 10,
    backgroundColor: 'rgba(148,108,230,.1)',
    margin: 5,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row'
  },
  content: {
    color: '#946ce6',
    paddingLeft: 20
  },
  list: {
    margin: 20
  }
})
