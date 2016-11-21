import React from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './common/Home';
import About from './common/About';
import List from './tasks/List';
import ListTask from './tasks/ListTask';
import App from './common/App';
import data from './model/data';
import AuthService from './utils/AuthService'
import Login from './common/Login'

const auth = new AuthService('M1vxEZpexCmgi02WxuDT8UmFzQlrBp7j', 'jezzamon.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

var routes = (
	<Router history={browserHistory}>
		{/*<!--Each route is defined with Route-->*/}
		<Route path="/" component={App} auth={auth}>
			<IndexRoute component={Home} onEnter={requireAuth}/>
			<Route path="list" component={List} data={data} onEnter={requireAuth}/>
			<Route path="list/:id" component={ListTask} data={data} onEnter={requireAuth}/>
			<Route path="about" component={About}/>
			<Route path="login" component={Login}/>
		</Route>
    </Router>
);
	
ReactDOM.render(
    routes,
    document.getElementById('container')
);