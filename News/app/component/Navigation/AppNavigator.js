import React from 'react'
import Home from '../Screens/Home'
import NewsList from '../List/NewsList'
import NewsDetail from '../Screens/NewsDetail'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import ResetPassword from '../Screens/ResetPassword'
import StartScreen from '../Screens/StartScreen'

const Stack = createStackNavigator()
export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
        headerLeftContainerStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: 'rgba(92,90,91,0.7)',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: -5,
        },
      }}
      initialRouteName="StartScreen"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Detail" component={NewsDetail} />
      <Stack.Screen name="List" component={NewsList} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  )
}
