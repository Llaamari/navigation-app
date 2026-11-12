
import type { ReactElement } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

// This defines the navigation properties of the HomeScreen component.
type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export default function HomeScreen({
  navigation,
}: HomeScreenProps): ReactElement {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Second Screen"
        // This opens the SecondScreen view.
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
