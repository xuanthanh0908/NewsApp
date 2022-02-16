import React, { useState, useEffect } from 'react'
import Screen from '../Common/Screen'
import SearchBar from '../SearchBar'
import FeatureNews from '../FeatureNews'
import BreakingNews from '../BreakingNews'
import PoliticalNews from '../PoliticalNews'
import TechNews from '../TechNews'
import EntertainmentNews from '../EntertainmentNews'
import useNews from '../../hooks/useNews'
import ActivityIndicator from '../Common/ActivityIndicator'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'
import firebase from 'firebase/compat/app'
import database from 'firebase/compat/database'

export default function Home() {
  const [isSearFocused, setSearchFocused] = useState(false)
  const [
    featureNews,
    breakingNews,
    politicalNews,
    techNews,
    entertainmentNews,
    loading,
  ] = useNews()
  useEffect(() => {
    RegisterForPushNotifications()
  }, [])
  const RegisterForPushNotifications = async () => {
    // Check for existing permissions...
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    let FinalStatus = status

    // if no existing permission, ask user for permission...
    if (status !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      FinalStatus = status
    }
    // if no permission, exit the function...
    if (FinalStatus !== 'granted') {
      return
    }
    // get token
    let token = await Notifications.getExpoPushTokenAsync()
    console.log(token)

    // Add token to firebase
    let uid = firebase.auth().currentUser.uid
    firebase.database().ref('Users').child(uid).update({
      expoPushToken: token,
    })
  }
  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen isSearchFocused={isSearFocused}>
        <SearchBar setSearchFocused={setSearchFocused} />
        <FeatureNews item={featureNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </Screen>
    </>
  )
}
