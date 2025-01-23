import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Onboarding from '../components/Onboarding'

type RootStackParamList = {
    onboarding: undefined;
    gameScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'onboarding'>;

const OnboardingScreen = () => {
    return (
        <Onboarding />
    )
}

export default OnboardingScreen