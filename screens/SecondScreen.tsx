
import { View, Text, StyleSheet } from 'react-native';
import type { ReactElement } from 'react';

export default function SecondScreen(): ReactElement {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
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
