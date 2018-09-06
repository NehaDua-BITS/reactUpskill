import React from "react";
import {NavLink} from "react-router-dom";

//we wont import render from react-dom here cz we won't render it directly into html page 
//instead export it and import in other js file

//converting into stateless components since it's state will never change and thus not re-rendered
//export class Header extends React.Component {
export const Header = (props) => {
	return(
		<nav className="navbar navbar-deafult">
			<div className="container">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li><NavLink to={"/home"} activeStyle={{color : "red"}}>Home</NavLink> </li>
						<li><NavLink to={"/user/10"} activeStyle={{color : "red"}}>User</NavLink> </li>
					</ul>
				</div>
			</div>
		</nav>
	);
}


