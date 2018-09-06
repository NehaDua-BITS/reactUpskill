import React from "react";
import { render } from "react-dom";    
//import {Router, Route, browserHistory} from "react-router";
import {BrowserRouter as Router, Switch, Route, browserHistory} from "react-router-dom";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

//create a component : create class for it
class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
			<div>
				<Root>
					<Switch>
					<Route path="/user/:id" component={User} />
					<Route path="/home" component={Home} />
					<Route component={Home} />
					</Switch>
				</Root>
			</div>
			</Router>
		);
	}
  
}

render(<App/>, window.document.getElementById("app"));

//localhost:8080/user
//localhost:8080/path


/*
			<Root>
				<Home></Home>
			</Root>
*/