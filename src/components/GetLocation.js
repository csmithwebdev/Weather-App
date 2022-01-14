import React from 'react';


class GetLocation extends React.Component {

	constructor(props) {
		super(props);

		this.state = {lat: null, lon: null, errorMessage: ''};

		window.navigator.geolocation.getCurrentPosition(
		position => {
			this.setState ({lat: position.coords.latitude, lon: position.coords.longitude});
			this.props.position(this.state.lat, this.state.lon);
		},
		
		err => {
			this.setState({errorMessage: err.message});
		});
	}	

	render() {

		if (this.state.errorMessage) {
			return (
			<div className="container">
				<div style={{marginTop: '20px', textAlign: 'center', color: '#fff', background: '#c12f2f', padding: '20px'}}>{this.state.errorMessage.toUpperCase()}</div>
			</div>
			);	
		} else {return <div> </div>;}
	}
}

export default GetLocation;



