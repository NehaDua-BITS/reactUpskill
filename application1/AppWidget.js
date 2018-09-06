import React, {PropTypes} from 'react';
import {Input, Button} from 'react-bootstrap';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			count : 0,
			txt : ''
		}
		this.update = this.update.bind(this);
	}

        update(e) {
		this.setState({
			txt: e.target.value
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
		<Widget update={this.update} txt={this.state.txt}/>
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
