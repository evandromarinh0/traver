import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../components/CustomTabBar';
import Habits from '../screens/HabitsPage';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}   initialRouteName="Main">
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="Habits" component={Habits} />
        {/*qualquer outra pagina, so adicionar aqui em baixo*/}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}