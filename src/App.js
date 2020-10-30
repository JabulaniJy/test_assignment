import './App.css';
import Main from './screens/Main'
import {BrowserRouter} from 'react-router-dom'
import {store,rrfProps} from './redux/store';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider}from 'react-redux-firebase'
function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <div className="App">
              <Main/>
          </div>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
