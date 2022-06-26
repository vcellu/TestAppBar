import React from 'react';

import {StyleSheet, FlatList, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import ViewContainer from './ViewContainer';

const data = Array(40)
  .fill(0)
  .map((m, index) => ({name: 'foo', sub: `${index + 1}`}));

const MyList = () => {
  const renderItem = ({item}) => (
    <ViewContainer style={{backgroundColor: 'white'}} edges={['left', 'right']}>
      <List.Item
        title={item.name}
        description={item.sub}
        style={styles.item}
        left={props => <List.Icon {...props} icon="folder" />}
      />
    </ViewContainer>
  );
  return (
    <ViewContainer style={styles.list} edges={['bottom']}>
      {/* <ViewContainer
        style={{backgroundColor: 'white'}}
        edges={['left', 'right']}> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
      {/* </ViewContainer> */}
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
  },
});

export default MyList;
