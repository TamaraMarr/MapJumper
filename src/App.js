import React, { Component } from "react";

import { MapWithAMarker } from "./Map";

import "./App.css";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: 44.7866,
			lng: 20.4489
		};
	}

	showMap(lat, lng) {
		this.setState({
			lat,
			lng
		});
	}

	render() {
		return (
			<div className="container">
				<header className="App-header">
					<h1>
						MapJumper
					</h1>
				</header>
				<MapWithAMarker
					center={{ lat: this.state.lat, lng: this.state.lng }}
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
                <div className="col-12 buttonDivStyle">
                    <button type="button" class="btn" onClick={() => {this.showMap(59.3293, 18.0686)}}>Sweden</button>
                    <button type="button" class="btn" onClick={() => {this.showMap(41.2995, 69.2401)}}>Uzbekistan</button>
                    <button type="button" class="btn" onClick={() => {this.showMap(55.7558, 37.6173)}}>Russia</button>
                    <button type="button" class="btn" onClick={() => {this.showMap(48.8566, 2.3522)}}>France</button>
                    <button type="button" class="btn" onClick={() => {this.showMap(47.8864, 106.9057)}}>Mongolia</button>
                    <button type="button" class="btn" onClick={() => {this.showMap(38.9072, -77.0369)}}>USA</button>
                    <button type="button" class="btn" onClick={() => {this.showMap(-15.7942, -47.8822)}}>Brazil</button>
                    <button type="button" class="btn" onClick={() => {this.showMap(12.1348, 15.0557)}}>Chad</button>
                    <button type="button" class="btn" onClick={() => {this.showMap(45.4215, -75.6972)}}>Canada</button>
                </div>
			</div>
		);
	}
}
