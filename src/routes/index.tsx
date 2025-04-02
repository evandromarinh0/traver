import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../components/CustomTabBar';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}   initialRouteName="Main">
        <Stack.Screen name="Main" component={BottomTabs} />
        {/*qualquer outra pagina, so adicionr aqui em baixo*/}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}