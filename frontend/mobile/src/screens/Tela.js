import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExampleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Exemplo de Tela</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ExampleScreen;
