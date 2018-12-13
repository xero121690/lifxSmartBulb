import React, { Component } from 'react';

import image from "./livingroom.jpg";
import "./Home.css";
import {
	NavLink,
} from "react-router-dom";

class Home extends Component {
	render() {
		return (
		<div>
			<p align="center"><b>To get started, head on over to the LIFX Control tab.</b></p>
			<div class="container">
			<div class="top-left">Control from a distance.</div>
				<img src={image} className="homeImg" alt="homeImg"></img>
				<NavLink to="/App"><button>Access Light Controls</button></NavLink>
			</div>
			<div>
				
			</div>
		</div>
		)
	}
}

export default Home;