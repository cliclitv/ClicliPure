import React, { useState } from 'react'
import { Image, View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'
import { $theme } from '../../asset/js/const'

export default function Mine(props) {
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')

  const img = 'http://p3.so.qhimgs1.com/t02ee608edd64a69d7a.jpg'
  function changeName(text) {
    clearTimeout(timer)
    timer = setTimeout(() => setName(text), 500)
  }
  function changePwd(text) {
    clearTimeout(timer)
    timer = setTimeout(() => setPwd(text), 500)
  }
  return (
    <View style={s.container}>
      <Image source={{ uri: img }} style={s.avatar} />
      <TextInput
        style={s.item}
        underlineColorAndroid='transparent'
        maxLength={20}
        placeholder={'用户名'}
        placeholderTextColor={'rgba(255,255,255,.2)'}
        onChangeText={changeName}
      ></TextInput>
      <TextInput
        style={s.item}
        underlineColorAndroid='transparent'
        maxLength={20}
        placeholder={'密码'}
        placeholderTextColor={'rgba(255,255,255,.2)'}
        onChangeText={changePwd}
      ></TextInput>
      <TouchableOpacity style={s.login}>
        <Text style={s.text}>登录</Text>
      </TouchableOpacity>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'rgba(148,108,230,.1)',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    margin: 20,
    color: '#fff',
    width: '80%'
  },
  login: {
    backgroundColor: $theme,
    margin: 20,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    color: '#fff'
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 20
  }
})
