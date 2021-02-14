import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          ProviderDash: {
            screens: {
              ProviderDashScreen: 'providerdash',
              ProviderScreen: "providerprofile",
              FacilityScreen: "facilityprofile"
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
