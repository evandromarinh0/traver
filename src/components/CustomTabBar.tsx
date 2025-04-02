import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import {Home, Activity, Settings, PlusCircle} from 'lucide-react-native';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  top: -40px;
  background-color: #007aff;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  elevation: 5;
` as unknown as typeof TouchableOpacity;

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
