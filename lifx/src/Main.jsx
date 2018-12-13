import React, { Component } from 'react';
import ReactDOM from "react-router-dom";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import App from "./App";
import "./App.css";
import "./Main.css";

class Main extends Component { render() { return (
<HashRouter>
	<div>
		<h1>LIFX Control</h1>
		<ul className="header">
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/App">App</NavLink>
			</li>
			<li>
				<NavLink to="/AboutUs">About Us</NavLink>
			</li>
		</ul>
		<div className="content">
			<Route path="/Home" component={Home}/>
			<Route path="/App" component={App}/>
			<Route path="/AboutUs" component={AboutUs}/>
		</div>
	</div>
</HashRouter>
) } }

export default Main;
