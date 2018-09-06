//react code
import React from "react";
import {connect} from "react-redux";

import { Main } from "../components/Main";
import { User } from "../components/User";

import { setName } from "../actions/userActions";

class App extends React.Component {
		
	render() {
		return (
			<div className="container">
				<Main changeUsername={() => this.props.setName("Anna")} />
				<User username={this.props.user.name} />
			</div>
		);
	}	
}

//which prop of global application state i want to use and map to local prop of this component
const mapStateToProps = (state) => {
	return {
		user: state.user,
		math: state.math
	};	
};

//map actions now
const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch(setName(name));
		}
	};
};

//execute to connect react with redux then only above will work
export default connect(mapStateToProps, mapDispatchToProps)(App);


