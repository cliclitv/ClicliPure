import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from '../../widget/Icon/Icon'

export default function Mine(props) {
  const img = 'http://p3.so.qhimgs1.com/t023b5c6193f5db09af.jpg'
  const list = [
    ['历史记录', 'todo'],
    ['使用说明', 'todo'],
    ['联系我们', 'admin@clicli.us'],
    ['版本更新', 'v0.0.1']
  ]
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.head}>
        <Image source={{ uri: img }} style={s.avatar} />
        <Text style={s.name}>登录</Text>
      </TouchableOpacity>
      {list.map((item, index) => {
        return (
          <TouchableOpacity key={index} style={s.item}>
            <Text style={s.left}>{item[0]}</Text>
            <Text style={s.right}>{item[1]}</Text>
            <Icon name={'right'} size={16} color={'#bbb'} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    flex: 1
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  head: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#eff2fe',
    borderBottomWidth: 10
  },
  name: {
    fontSize: 18,
    padding: 20
  },
  item: {
    color: '#555',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  left: {
    color: '#555',
    flex: 1,
    paddingLeft: 10,
  },
  right: {
    color: '#888',
    paddingRight: 10,
    fontSize: 12
  }
})
