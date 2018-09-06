import React, {PropTypes} from 'react';
import {Input, Button} from 'react-bootstrap';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			count : 0,
			txt1 : '',
			txt2 : '',
			txt3 : ''
		}
		this.update = this.update.bind(this);
	}

        update(key, e) {
		this.setState({
			[key]: e.target.value
		})
	}
	
	increment() {
		this.setState({count: this.state.count+1});
	}

	decrement() {
		this.setState({count: this.state.count-1});
	}

	componentWillMount() {
		if (this.props.defaultCount) {
			this.setState({count: this.props.defaultCount});
		}
	}

	render() {
		return (
		<div>
		<Widget update={this.update.bind(this, "txt1")} txt={this.state.txt1}/>
		<Widget update={this.update.bind(this, "txt2")} txt={this.state.txt2}/>
		<Widget update={this.update.bind(this, "txt3")} txt={this.state.txt3}/>
		</div> );
	}

}

class Widget extends React.Component
{
	render() {
	return(
		<div>
			<input type="text" onChange={this.props.update} />
			<h1> {this.props.txt} </h1>
		</div>
	)};
}


		

//jsx: extended javascript
