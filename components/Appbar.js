import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

const Appbar = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.body} edges={['top', 'left', 'right']}>
        <View style={styles.bar}>
          <Text>Hello</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
  },
  bar: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  }
});

export default Appbar;
