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
			{this.props.title}
			<br />
			<input type="button" value={this.props.defaultCount} />
			<br />
			{this.state.count}
			<br />
			<br />
			<Button onClick={this.increment.bind(this)}>Increment</Button>
			<br />
			<br />
			<Button onClick={this.decrement.bind(this)}>Decrement</Button>
			<br />
			<br />
			<input type="text" onChange={this.update} />
			<h1> {this.state.txt} </h1>
		</div> );
	}


}
		

//jsx: extended javascript
