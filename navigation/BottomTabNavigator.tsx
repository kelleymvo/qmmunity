import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ProviderScreen from '../screens/ProviderScreen';
import FacilityScreen from '../screens/FacilityScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SearchScreen from '../screens/SearchScreen';
import ForumScreen from '../screens/ForumScreen';
import NotifScreen from '../screens/NotifScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import { BottomTabParamList, ExploreParamList, ForumParamList,
        NotificationsParamList, UserProfileParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Explore"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="compass" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Forum"
        component={ForumNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="chatbubbles" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="notifications" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={UserProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ExploreStack = createStackNavigator<ExploreParamList>();

function ExploreNavigator() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ headerTitle: 'Explore' }}
      />
      <ExploreStack.Screen name="Search" component={SearchScreen}
      options={{ animationEnabled: false }} />
      <ExploreStack.Screen name="FacilityProfile" component={FacilityScreen}
      options={({ route }) => ({ title: route.params.name })} />
      <ExploreStack.Screen name="ProviderProfile" component={ProviderScreen}
      options={({ route }) => ({ title: route.params.name })} />
    </ExploreStack.Navigator>
  );
}

const ForumStack = createStackNavigator<ForumParamList>();

function ForumNavigator() {
  return (
    <ForumStack.Navigator>
      <ForumStack.Screen
        name="ForumScreen"
        component={ForumScreen}
        options={{ headerTitle: 'Forum' }}
      />
    </ForumStack.Navigator>
  );
}

const NotificationsStack = createStackNavigator<NotificationsParamList>();

function NotificationsNavigator() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="NotifScreen"
        component={NotifScreen}
        options={{ headerTitle: 'Notifications' }}
      />
    </NotificationsStack.Navigator>
  );
}

const UserProfileStack = createStackNavigator<UserProfileParamList>();

function UserProfileNavigator() {
  return (
    <UserProfileStack.Navigator>
      <UserProfileStack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </UserProfileStack.Navigator>
  );
}
