import React, { Component } from 'react';

import image from "./livingroom.jpg";
import "./Home.css";
import App from "./App";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

class Home extends Component {
	render() {
		return (
		<div>
			<div class="imgContainer">
			<div class="top-left">Control your lights anywhere.</div>
				<img src={image} className="homeImg"></img>
				<NavLink to="/App"><button class="button">Access Light Controls</button></NavLink>
			</div>
			<div>

			</div>
		</div>
		)
	}
}

export default Home;
