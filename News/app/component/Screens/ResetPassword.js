import React, { useState } from 'react'
import Background from '../Common/Background'
import BackButton from '../Common/BackButton'
import Logo from '../Common/Logo'
import Header from '../Common/Header'
import TextInput from '../Common/TextInput'
import Button from '../Common/Button'
import { useNavigation } from '@react-navigation/native'
import { emailValidator } from '../Helpers/emailValidator'

export default function ResetPassword() {
  const navigation = useNavigation()
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('Login')
  }

  return (
    <Background>
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  )
}
