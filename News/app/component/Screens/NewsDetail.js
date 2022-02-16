import React, { useState, useEffect } from 'react'
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native'
import HorizotalList from '../List/HorizotalList'
import newsApi from '../../api/newsApi'
import Close from '../Common/Close'
import { useNavigation } from '@react-navigation/native'
import ActivityIndicator from '../Common/ActivityIndicator'

const { width, height } = Dimensions.get('window')
export default function NewsDetail({ route }) {
  const [relatedNews, setRelatedNews] = useState([])
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const { id, category: PostCategory } = route.params.item
  const fetchPost = async (idPost) => {
    setLoading(true)
    const result = await newsApi.getSingle(idPost)
    setNews(result)
  }
  const fetchRelatedPosts = async (category) => {
    const result = await newsApi.getByCategory(category, 6)
    setRelatedNews(result.filter((item) => item.id != id))
    setLoading(false)
  }
  useEffect(() => {
    fetchPost(id)
    fetchRelatedPosts(PostCategory)
  }, [])

  const navigation = useNavigation()
  const { title, thumbnail, content } = news
  return (
    <>
      <ActivityIndicator visible={loading} />
      <ScrollView style={styles.container}>
        <Image style={styles.Image} source={{ uri: thumbnail }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.RelatedPostContainner}>
          <HorizotalList title="Related Posts" data={relatedNews} />
        </View>
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </>
  )
}
const styles = StyleSheet.create({
  container: {},
  Image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#4e4d4d',
  },
  RelatedPostContainner: {
    padding: 10,
  },
})
