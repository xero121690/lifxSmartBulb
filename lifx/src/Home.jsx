import React, { Component } from 'react';
import ReactDOM from "react-dom";
import image from "./livingroom.jpg";
import "./Home.css";
import {
	NavLink,
} from "react-router-dom";

class Home extends Component {
	render() {
		return (
		<div>
			<div class="container">
			<div class="top-left">Control from a distance.</div>
				<img src={image}></img>
				<NavLink to="/App"><button>Access Light Controls</button></NavLink>
			</div>
			<div>
				
			</div>
		</div>
		)
	}
}

export default Home;