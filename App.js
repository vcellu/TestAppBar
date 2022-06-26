/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Appbar from './components/Appbar';
import MyList from './components/MyList';

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <View style={styles.body}>
          <Appbar />
          <MyList />
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#A0A0A0',
    flex: 1,
  },
});
export default App;
