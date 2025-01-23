import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/OnboardingScreen";
import GameScreen from "./screens/GameScreen";

type RootStackParamList = {
  onboarding: undefined;
  gameScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboarding">
        <Stack.Screen name="onboarding" component={OnboardingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="gameScreen" component={GameScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;