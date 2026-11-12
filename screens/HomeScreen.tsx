
import { View, Text, StyleSheet } from 'react-native';
import type { ReactElement } from 'react';

// ReactElement explicitly specifies the return type of the function.
export default function HomeScreen(): ReactElement {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
