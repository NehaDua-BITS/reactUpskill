import React from "react";
import {browserHistory} from "react-router-dom";

export class User extends React.Component
{
	callHome()
	{
		 this.props.history.push("/home");		
	}
	
	render()
	{
		return(
			<div>
				<h3>The User Page</h3>
				<p>User ID: {this.props.match.params.id} </p>
				<button onClick={this.callHome.bind(this)}>Go to Home!</button>
			</div>
		);
	}
}