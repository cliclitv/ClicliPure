import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import Icon from '../../widget/Icon/Icon'
import { getAvatar } from '../../asset/js/util'
import { $theme } from '../../asset/js/const'

export default function Mine(props) {
  const defaultAvatar = 'http://p3.so.qhimgs1.com/t023b5c6193f5db09af.jpg'
  const [name, setName] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const list = [
    ['历史记录', 'todo'],
    ['使用说明', 'todo'],
    ['联系我们', 'admin@clicli.us'],
    ['版本更新', 'v0.0.1']
  ]
  useEffect(() => {
    AsyncStorage.getItem('user').then(res => {
      if (res) {
        const user = JSON.parse(res)
        setName(user.name)
        setAvatar(user.qq)
      }
    })
  }, [])
  function logout() {
    AsyncStorage.removeItem('user').then(() => {
      setName('')
      setAvatar('')
    })
  }
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.head} onPress={() => (name ? {} : props.navigation.navigate('Login'))}>
        <Image source={{ uri: avatar ? getAvatar(avatar) : defaultAvatar }} style={s.avatar} />
        <Text style={s.name}>{name || '登录'}</Text>
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
      {name ? (
        <TouchableOpacity style={s.login} onPress={logout}>
          <Text style={s.text}>退出登陆</Text>
        </TouchableOpacity>
      ) : null}
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
    paddingLeft: 10
  },
  right: {
    color: '#888',
    paddingRight: 10,
    fontSize: 12
  },
  login: {
    backgroundColor: $theme,
    margin: 20,
    padding: 12,
    borderRadius: 30,
    color: '#fff'
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16
  }
})
