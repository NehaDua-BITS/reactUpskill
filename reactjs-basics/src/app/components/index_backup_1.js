//these 2 imports are mandatory
import React from "react";
import { render } from "react-dom";    

//import created components here by specifying component name and path
import { Header } from "./components/Header";
import { Home } from "./components/Home";

//create a component : create class for it
class App extends React.Component {  //component has many built-in methods that can be used, ex: render
	
	constructor()
	{
		super();
		this.state = {
			newLink : "http://google.com",
			linkName : "Home"
		}
	}
	
	onGreet()
	{
		alert("Hello human!!");
	}
	
	onChangeLink(newName)
	{
		this.setState(
			{
				newLink: newName				
			}
		);
	}

	onChangeLinkName(newName)
	{
		this.setState(
			{
				linkName: newName				
			}
		);
	}

	//this is jsx which allows us to write html code in javascript file; internally converted to js
	//this method returns html element which has to be added to DOM i.e. displayed on screen
	render() {
		return (
			//in return only 1 element can be returned..nested elements are allowed
			<div className="container">
			
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1"> 
						<Header newLink={this.state.newLink} linkName={this.state.linkName}/>   
					</div>
				</div>
				
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home initialAge={27} 
							  name={"Max"} 
			                  greet={this.onGreet} 
							  changeLink={this.onChangeLink.bind(this)}
							  changeName={this.onChangeLinkName.bind(this)} />
					</div>
				</div>
			
			</div>
		);
	}
  
}

//now tell react where to render this component in html page 
render(<App/>, window.document.getElementById("app"));
