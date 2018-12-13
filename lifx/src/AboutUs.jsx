import React, { Component } from 'react';
import './style.css';
import squid from './squid.jpg';


class AboutUs extends Component {
	render () {
		return (
			<div id="aboutus">
				<h2>Responsive "Meet The Team" Section</h2>
				<br></br>
				<p>Resize the browser window to see the effect.</p>
				<br></br>
				<div>
					<div className="row">
						<div className="column" >
							<div className="card" >
								<img src={squid} alt="Jane" width="300" height="250"/>
								<div className="container" >
									<h2>Jane Doe</h2>
									<p className="title">CEO &amp; Founder</p>
									<p>Some text that describes me lorem ipsum ipsum lorem.</p>
									<p>example@example.com</p>
								</div>
							</div>
						</div>

						<div className="column" >
							<div className="card" >
								<img src={squid} alt="Jane"  width="400" height="250"/>
								<div className="container" >
									<h2>Mike Ross</h2>
									<p className="title">Art Director</p>
									<p>Some text that describes me lorem ipsum ipsum lorem.</p>
									<p>example@example.com</p>
								</div>
							</div>
						</div>
						<div className="column" >
							<div className="card" >
								<img src={squid} alt="Jane"  width="400" height="250"/>
								<div className="container" >
									<h2>John Doe</h2>
									<p className="title">Designer</p>
									<p>Some text that describes me lorem ipsum ipsum lorem.</p>
									<p>example@example.com</p>
								</div>
							</div>
						</div>
						<div className="column" >
							<div className="card" >
								<img src={squid} alt="Jane"  width="400" height="250"/>
								<div className="container" >
									<h2>John Doe</h2>
									<p className="title">Designer</p>
									<p>Some text that describes me lorem ipsum ipsum lorem.</p>
									<p>example@example.com</p>
								</div>
							</div>
						</div>
						<div className="column" >
							<div className="card" >
								<img src={squid} alt="Jane"  width="400" height="250"/>
								<div className="container" >
									<h2>John Doe</h2>
									<p className="title">Designer</p>
									<p>Some text that describes me lorem ipsum ipsum lorem.</p>
									<p>example@example.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AboutUs;