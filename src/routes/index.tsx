import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Homepage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}