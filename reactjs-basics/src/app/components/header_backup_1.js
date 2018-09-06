import React from "react";
//we wont import render from react-dom here cz we won't render it directly into html page 
//instead export it and import in other js file

export class Header extends React.Component {
		render() {
			return(
				<nav className="navbar navbar-deafult">
					<div className="container">
						<div className="navbar-header">
							<ul className="nav navbar-nav">
								<li><a href="#">Home</a></li>
							</ul>
				 		</div>
				    </div>
				</nav>
			);
		}
}