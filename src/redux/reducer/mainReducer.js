import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore'
import{firebaseReducer} from 'react-redux-firebase'
import surveyReducer from './surveyReducer'

 const mainReducer =combineReducers({
    survey:surveyReducer,
    firebase: firebaseReducer,
    firestore:firestoreReducer,
    
})

export default mainReducer;