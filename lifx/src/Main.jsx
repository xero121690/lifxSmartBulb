import React, { Component } from 'react';
import {
	Route,
	NavLink,
	HashRouter,
	Redirect
} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import App from "./App";
import "./App.css";
import "./Main.css";

class Main extends Component { render() { return (
<HashRouter>
	<div>
		<ul className="header">
				<NavLink to="/Home"><h3>LIFX Control</h3></NavLink>
			<li>
				<NavLink to="/App">Light Controls</NavLink>
			</li>
			<li>
				<NavLink to="/AboutUs">About Us</NavLink>
			</li>
		</ul>
		<div className="content">
			<Route path="/Home" component={Home}/>
			<Route path="/App" component={App}/>
			<Route path="/AboutUs" component={AboutUs}/>
			<Redirect to="/Home"/> 
			{/* fix the redirection */}
		</div>
	</div>
</HashRouter>
) } }

export default Main;
