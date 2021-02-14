import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

export default function OnboardScreen() {

  return (
    <View style={{flex: 1}}>
    <ProgressSteps>
        <ProgressStep label="">
            <View style={{ alignItems: 'center' }}>
                 <Image source={ require('../assets/images/0Onboarding.png') } />
            </View>
        </ProgressStep>
        <ProgressStep label="">
            <View style={{ alignItems: 'center' }}>
                  <Image source={ require('../assets/images/1Onboarding.png') } />
            </View>
        </ProgressStep>
        <ProgressStep label="">
            <View style={{ alignItems: 'center' }}>
                 <Image source={ require('../assets/images/2Onboarding.png') } />
              </View>
        </ProgressStep>
        <ProgressStep label="">
            <View style={{ alignItems: 'center' }}>
                 <Image source={ require('../assets/images/3Onboarding.png') } />
            </View>
        </ProgressStep>
        <ProgressStep label="">
            <View style={{ alignItems: 'center' }}>
                 <Image source={ require('../assets/images/4Onboarding.png') } />
            </View>
        </ProgressStep>
      </ProgressSteps>
  </View>)
}