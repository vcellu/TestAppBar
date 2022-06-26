import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ViewContainer = ({children, style, edges}) => {
  return (
    <SafeAreaView style={style} edges={edges || ['left', 'right', 'bottom']}>
      {children}
    </SafeAreaView>
  );
};
export default ViewContainer;
