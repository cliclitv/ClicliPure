import React, { useState } from 'react'
import { Image, View, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage } from 'react-native'
import { $theme } from '../../asset/js/const'
import { postLogin } from '../../asset/js/post'

export default function Mine(props) {
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')
  let $1 = null
  let $2 = null
  const img = 'http://p3.so.qhimgs1.com/t02ee608edd64a69d7a.jpg'
  function changeName(text) {
    clearTimeout($1)
    $1 = setTimeout(() => setName(text), 500)
  }
  function changePwd(text) {
    clearTimeout($2)
    $2 = setTimeout(() => setPwd(text), 500)
  }
  function login() {
    postLogin({ name, pwd }).then(res => {
      AsyncStorage.setItem('token', JSON.stringify(res.token)).then(() => {
        AsyncStorage.setItem('user', JSON.stringify(res.user)).then(() => {
          props.navigation.goBack()
        })
      })
    })
  }
  return (
    <View style={s.container}>
      <Image source={{ uri: img }} style={s.avatar} />
      <TextInput
        style={s.item}
        selectionColor={$theme}
        underlineColorAndroid='transparent'
        maxLength={20}
        placeholder={'用户名'}
        placeholderTextColor={'rgba(148,108,230,.5)'}
        onChangeText={changeName}
      ></TextInput>
      <TextInput
        style={s.item}
        selectionColor={$theme}
        underlineColorAndroid='transparent'
        maxLength={20}
        placeholder={'密码'}
        placeholderTextColor={'rgba(148,108,230,.5)'}
        onChangeText={changePwd}
      ></TextInput>
      <TouchableOpacity style={s.login} onPress={login}>
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
    borderRadius: 30,
    padding: 10,
    paddingLeft: 20,
    margin: 20,
    color: $theme,
    width: '80%'
  },
  login: {
    backgroundColor: $theme,
    margin: 20,
    padding: 12,
    width: '80%',
    borderRadius: 30,
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
