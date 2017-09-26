import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'

class App extends Component {
  
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBKD_9P-Gep0A6iy31DpRfFL9dwoNQoM08',
      authDomain: 'manager-38dcc.firebaseapp.com',
      databaseURL: 'https://manager-38dcc.firebaseio.com',
      projectId: 'manager-38dcc',
      storageBucket: 'manager-38dcc.appspot.com',
      messagingSenderId: '776034397783'
    };

    firebase.initializeApp(config);
  }
  
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    )
  }
}

export default App