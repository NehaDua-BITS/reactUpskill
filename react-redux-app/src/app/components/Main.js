import React from "react";

export class Main extends React.Component
{
	render()
	{
		return(
			<div>
				<h3>The Main Page</h3>
				<button onClick={() => this.props.changeUsername('Anna')}>Change Username!</button>
			</div>
		);
	}
}
