import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  onboarding: undefined;
  gameScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'gameScreen'>;

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style= {styles.text}>Comienza el juego</Text>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0D7'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})