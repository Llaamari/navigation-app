
import type { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import CustomAppBar from './components/CustomAppBar';
import type { RootStackParamList } from './types/navigation';

// This creates a Stack navigator.
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): ReactElement {
  return (
    <PaperProvider>
      {/* This is the root component of React Navigation. */}
      <NavigationContainer>
        {/* Specifies that the app opens to the Home screen initially. */}
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomAppBar {...props} />,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home Screen' }}
          />
          {/* Links the name of the navigation route, “Second,” to the component “SecondScreen.” */}
          <Stack.Screen
            name="Second"
            component={SecondScreen}
            options={{ title: 'Second Screen' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
