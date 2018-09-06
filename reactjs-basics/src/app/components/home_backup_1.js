import React from "react";

export class Home extends React.Component
{
	render()
	{
		var text = "Text declared in home only!!";		
		console.log(this.props);
		return(
			<div>
				<p>In home Component!!</p>
				<p>{text}</p>
				<p>Your name is {this.props.name} and age is {this.props.age}</p>
				<p>The user passed is : {this.props.user.name}</p>
				<p>Hobbies : {this.props.user.hobbies} </p> 
				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
					</ul>
				</div>
				{this.props.children}
			</div>
		);
	}

}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	user: React.PropTypes.object,
	//no type for children so just making it mandatory/required
	children: React.PropTypes.element.isRequired
};


