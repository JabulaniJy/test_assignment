import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {getFirebase} from 'react-redux-firebase';
import firebase from '../config/fbConfig';
import mainReducer from './reducer/mainReducer'
import{createFirestoreInstance} from 'redux-firestore';

export const store = createStore(mainReducer,applyMiddleware(thunk.withExtraArgument({getFirebase})));
export const rrfProps={
    firebase,
    config:firebase,
    dispatch:store.dispatch,
    createFirestoreInstance,
}