import React, { Component } from 'react';
import './style.css';
import squid from './squid.jpg';
import Luis from './luis.png';
import Jeff from './jeff.jpg';
import Omar from './omar.jpg';
import Misael from './misael.png';


class AboutUs extends Component {
	render () {
		return (
			<div id="aboutus">
				<h2 align="center">"Meet The Team"</h2>
				<br></br>
				<br></br>
				<div>
					<div className="row">
						<div className="column" >
							<div className="card" >
								<img src={Misael} alt="Jane" width="250" height="250" className="aboutImg"/>
								<div className="container" >
									<h2>Misael Chocoj</h2>
									<p className="title">CEO &amp; Founder</p>
									<p>Some text that describes me lorem ipsum ipsum lorem.</p>
									<p>example@example.com</p>
								</div>
							</div>
						</div>

						<div className="column" >
							<div className="card" >
								<img src={Jeff} alt="Jane"  width="300" height="250" className="aboutImg"/>
								<div className="container" >
									<h2>Jeffrey Garcia</h2>
									<p className="title">Art Director</p>
									<p>Some text that describes me lorem ipsum ipsum lorem.</p>
									<p>example@example.com</p>
								</div>
							</div>
						</div>
						<div className="column" >
							<div className="card" >
								<img src={Luis} alt="Jane"  width="300" height="250" className="aboutImg"/>
								<div className="container" >
									<h2>Luis Chocoj</h2>
									<p className="title">Designer</p>
									<p>Some text that describes me lorem ipsum ipsum lorem.</p>
									<p>example@example.com</p>
								</div>
							</div>
						</div>
						<div className="column" >
							<div className="card" >
								<img src={Omar} alt="Jane"  width="300" height="250" className="aboutImg"/>
								<div className="container" >
									<h2>Omar Alhinnawi</h2>
									<p className="title">Designer</p>
									<p>Some text that describes me lorem ipsum ipsum lorem.</p>
									<p>example@example.com</p>
								</div>
							</div>
						</div>
						<div className="column" >
							<div className="card" >
								<img src={squid} alt="Jane"  width="300" height="250" className="aboutImg"/>
								<div className="container" >
									<h2>Mshari Alqahtani</h2>
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