/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {PhotoItemList} from './src/components/PhotoItemList';
import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {store} from 'store';

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PhotoItemList photoModel={undefined} />
      </Provider>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
