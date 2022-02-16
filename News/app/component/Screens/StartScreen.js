import React from 'react'
import Background from '../Common/Background'
import Logo from '../Common/Logo'
import Header from '../Common/Header'
import Button from '../Common/Button'
import Paragraph from '../Common/Paragraph'
import { useNavigation } from '@react-navigation/native'
export default function StartScreen() {
  const navigation = useNavigation()
  return (
    <Background>
      <Logo />
      <Header>Login Screen</Header>
      <Paragraph>
        Please Login to access the application or sign up if you don't have
        account.
      </Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
        Sign Up
      </Button>
    </Background>
  )
}
