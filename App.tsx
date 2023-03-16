import { NativeBaseProvider } from 'native-base'
import { StyleSheet } from 'react-native'
import Home from './src/Home'
import React from 'react'

const App = () => {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})