import React from 'react'
import { Image, FlatList, StyleSheet, Text, View } from 'react-native'
import { getSuo } from '../../asset/js/util'

export default function ListView(props) {
  const renderPost = ({ item }) => (
    <View style={s.container}>
      <Image source={{ uri: getSuo(item.content) }} style={s.cover} />
      <View style={s.rightContainer}>
        <Text style={s.title}>{item.title}</Text>
        <Text style={s.year}>{item.time}</Text>
      </View>
    </View>
  )
  return <FlatList data={props.post} renderItem={renderPost} style={s.list} keyExtractor={item => item.id.toString()} />
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
  cover: {
    width: 53,
    height: 81
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
})
