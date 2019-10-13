import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes.js';

// https://www.youtube.com/watch?v=ocnxJtZ6JOg

export default /*class*/ function App() {
  /*return (
    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    <Routes/>
  );*/
  /*render() {
    return (
      <Routes/>
    );
  }*/
  return <Routes/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
