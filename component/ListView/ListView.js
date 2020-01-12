import React from 'react'
import { Image, FlatList, StyleSheet, Text, View, SectionList } from 'react-native'
import { getSuo } from '../../asset/js/util'

export default function ListView(props) {
  const renderPost = ({ item }) => (
    <View style={s.wrap}>
      <View style={s.item}>
        <Image source={{ uri: getSuo(item.content) }} style={s.cover} resizeMode='cover' resizeMethod='auto' />
        <Text style={s.title}>{item.title}</Text>
        <Text style={s.time}>{item.time}</Text>
      </View>
    </View>
  )
  return props.section ? (
    <SectionList
      renderItem={renderPost}
      sections={props.section}
      numColumns={2}
      style={s.list}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      key={{}}
    />
  ) : (
    <FlatList
      data={props.data}
      renderItem={renderPost}
      numColumns={2}
      style={s.list}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      key={{}}
    />
  )
}

const s = StyleSheet.create({
  wrap: {
    width: '50%'
  },
  item: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: '#fff',
    margin: 10
  },
  cover: {
    width: '100%',
    height: 115,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    padding: 12,
    paddingBottom: 10,
    height: 60
  },
  time: {
    fontSize: 12,
    color: '#666',
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12
  },
  list: {
    backgroundColor: '#fff',
    marginBottom: 50,
    paddingLeft: 10,
    paddingRight: 10
  }
})
