import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

/*
function OnboardScreen( parameters ) {}

OnboardScreen = ( parameters ) => { }
*/

export default function OnboardScreen ({ navigation }) {

  return (
    <View style={styles.containerView}>
    <ProgressSteps>
        <ProgressStep nextBtnText=">" label="">
            <View style={{ alignItems: 'center' }}>
                 <Image source={ require('../../assets/images/0Onboarding.png') } />
            </View>
        </ProgressStep>
        <ProgressStep previousBtnText="<" nextBtnText=">" label="">
            <View style={{ alignItems: 'center' }}>
                  <Image source={ require('../../assets/images/1Onboarding.png') } />
            </View>
        </ProgressStep>
        <ProgressStep previousBtnText="<" nextBtnText=">" label="">
            <View style={{ alignItems: 'center' }}>
                 <Image source={ require('../../assets/images/2Onboarding.png') } />
              </View>
        </ProgressStep>
        <ProgressStep previousBtnText="<" nextBtnText=">" label="">
            <View style={{ alignItems: 'center' }}>
                 <Image source={ require('../../assets/images/3Onboarding.png') } />
            </View>
        </ProgressStep>
        <ProgressStep previousBtnText="<" nextBtnText=">" label="" onSubmit={() => navigation.navigate("Login")}>
            <View style={{ alignItems: 'center' }}>
                 <Image source={ require('../../assets/images/4Onboarding.png') } />
            </View>
        </ProgressStep>
      </ProgressSteps>
  </View>)
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1, backgroundColor: '#FFFFFF'
  },
 item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  whole: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 10
  },
  buttons: {
    zIndex: 11
  }
});