import React from "react";

export class Home extends React.Component
{
	constructor(props)
	{
		super();
		//this.age = props.age;
		//replacing props with state to reflect age changes in UI
		this.state = {
			age : props.initialAge,
			status : 0,
			link: "https://facebook.com",
			name: "Home",
			message: "im good"
		};
	}
	
	onMakeOlder()
	{
		//this.age += 3;
		this.setState( {
				age: this.state.age + 3
		});
		console.log(this.age);
	}
	
	onChangeLink()
	{
		this.props.changeLink(this.state.link);
	}
	
	onChangeLinkName()
	{
		console.log("name before is : " + this.state.name);
		
		this.setState(
		{
			name : this.state.name=="Home" ? "NewHome" : "Home"
		},() => {this.props.changeName(this.state.name)});
		
		console.log("name is : " + this.state.name);
		
		//this.props.changeName(this.state.name);
	}
	
	reflectField(event)
	{
		this.setState({
			message: event.target.value
		}
		);	
	}
	
	render()
	{
		console.log(this.props);
		return(
			<div>
				<p>In home Component!!</p>
				<p>Your name is {this.props.name} and age is {this.state.age}</p>
				<p>Status : {this.state.status}</p>
				<hr/>
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
				<hr/>
				<button onClick={this.props.greet}>Greet</button>
				<hr/>
				<button onClick={this.onChangeLink.bind(this)}>ChangeLink</button>
				<hr/>
				<button onClick={this.onChangeLinkName.bind(this)}>ChangeName</button>
				<hr/>	
				<input type="text" defaultValue={this.state.message} onChange={(event) => this.reflectField(event)}/>
				<hr/>
				<p id="messagePara">{this.state.message}</p>
			</div>
		);
	}

}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	greet: React.PropTypes.func
};


