import React, { useState } from 'react'
import { Image, View, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage } from 'react-native'
import { $theme } from '../../asset/js/const'
import { postLogin, postSignup } from '../../asset/js/post'
import TopTip from '../../widget/TopTip/TopTip'

export default function Mine(props) {
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')
  const [qq, setQQ] = useState(0)
  const [tip, setTip] = useState(false)
  let timer = null
  const img = 'http://p3.so.qhimgs1.com/t02ee608edd64a69d7a.jpg'
  function changeName(text) {
    clearTimeout(timer)
    timer = setTimeout(() => setName(text), 500)
  }
  function changePwd(text) {
    clearTimeout(timer)
    timer = setTimeout(() => setPwd(text), 500)
  }
  function changeQQ(text) {
    clearTimeout(timer)
    timer = setTimeout(() => setQQ(text), 500)
  }
  function login() {
    postLogin({ name, pwd }).then(res => {
      AsyncStorage.setItem('token', JSON.stringify(res.token)).then(() => {
        AsyncStorage.setItem('user', JSON.stringify(res.user)).then(() => {
          setTip(true)
          setTimeout(() => props.navigation.goBack(), 1000)
        })
      })
    })
  }
  function signup() {
    postSignup({ name, pwd, qq }).then(res => {
      setQQ(0)
      setTip(true)
      setTimeout(() => setTip(false), 3000)
    })
  }
  return (
    <View style={s.container}>
      {tip ? <TopTip bg={$theme} text={'成功啦'} /> : null}
      <Image source={{ uri: img }} style={s.avatar} />
      {qq ? (
        <TextInput
          style={s.item}
          selectionColor={$theme}
          underlineColorAndroid='transparent'
          maxLength={20}
          placeholder={'qq或邮箱'}
          placeholderTextColor={'rgba(148,108,230,.5)'}
          onChangeText={changeQQ}
        ></TextInput>
      ) : null}
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
      {qq ? (
        <TouchableOpacity style={s.login} onPress={signup}>
          <Text style={s.text}>注册</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={s.login} onPress={login}>
          <Text style={s.text}>登陆</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => changeQQ(1)}>
        <Text style={s.a}>{qq ? '登录 >' : '注册 >'}</Text>
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
  modal: {
    height: 40,
    width: 100,
    backgroundColor: $theme
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
  },
  a: {
    color: $theme
  }
})
