import { View, Text, StyleSheet, TextInput } from 'react-native'
import SearchModel from './Common/SearchModel'
import { useState } from 'react'
import newsApi from '../api/newsApi'

let timeOutId

const debounce = (func, delay) => {
  return (...args) => {
    if (timeOutId) clearTimeout(timeOutId)
    timeOutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}
const SearchBar = ({ setSearchFocused }) => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)
  const [notFound, setNotFound] = useState('')

  const handleChange = ({ nativeEvent }) => {
    const { text } = nativeEvent
    setQuery(text)
    setVisible(true)
    if (!text) setVisible(false)
    debounceSearch(query)
  }

  const handleSearch = async (value) => {
    const res = await newsApi.searchPost(value)
    if (res.success) {
      setNotFound('')
      setData(res.news)
    }

    if (!res.success) {
      setNotFound(res.message)
    }
  }

  const debounceSearch = debounce(handleSearch, 500)
  return (
    <>
      <View style={styles.Container}>
        <TextInput
          value={query}
          onChange={handleChange}
          style={styles.SearchInput}
          placeholder="Search here....."
          onFocus={() => setSearchFocused(true)}
          onBlur={() => {
            setSearchFocused(false)
            setQuery('')
            setNotFound('')
            setVisible(false)
          }}
        />
      </View>
      <SearchModel visible={visible} data={data} notFound={notFound} />
    </>
  )
}
const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  SearchInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 8,
    fontSize: 16,
  },
})

export default SearchBar
