import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../../screens/HomePage';
import {Home, Activity, Settings} from 'lucide-react-native';
import { useTheme } from '../../context/ThemeContext';

const Tab = createBottomTabNavigator();


const BottomTabs = () => {
  const { theme } = useTheme();
    
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          paddingVertical: 10
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({color}) => <Home size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Stats"
        component={HomePage}
        options={{
          tabBarIcon: ({color}) => <Activity size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomePage}
        options={{
          tabBarIcon: ({color}) => <Settings size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
