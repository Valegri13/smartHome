import React from 'react';
import './App.css';
import Dashboard from './dashboardComponents/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Auth/SignIn';
import { PrivatRoute } from './Auth/PrivatRoute';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { allReducers } from './Reducers/allReducers';
const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/sign_in' component={SignIn} />
            <PrivatRoute path='/' component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
