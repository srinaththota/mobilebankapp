import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigations/AppNavigator';
import { createStore , combineReducers } from 'redux';

import TransferReducer from './store/reducer/transfer';
import { Provider } from 'react-redux';
const rootReducers=combineReducers({
  transfer:TransferReducer
});
const store=createStore(rootReducers);

class App extends Component {
  render(){
  return (
    
     <Provider store={store}><AppNavigator/></Provider>
      
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;