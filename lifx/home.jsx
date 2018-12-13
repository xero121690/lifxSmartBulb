import React from 'react';
import ReactDOM from "react-dom";
import Main from "./Main";
import "./app.css";

class Main extends Component { render() { return (
<HashRouter>
	<div>
		<h1>LIFX Control</h1>
		<ul className="header">
			<li>
				<navLink to="/">Home</NavLink>
			</li>
			<li>
				<navLink to="/About Us">Home</NavLink>
			</li>
		</ul>
		<div className="content">
			<Route path="/" component={Home}/>
			<Route path="/stuff" component={Stuff}/>
		</div>
	</div>
</HashRouter>
) } }
