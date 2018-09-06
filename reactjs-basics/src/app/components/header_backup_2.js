import React from "react";
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
						<li><a href={props.newLink}>{props.linkName}</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
