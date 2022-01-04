import React from 'react';
import axios from 'axios';
import OpenWeatherMap from './apis/OpenWeatherMap'; 
import SearchForm from './SearchForm';
import WeatherList from './WeatherList';

class App extends React.Component {

	state = {weatherData: null, description: null, errorMessage: null} //set the response we get from api as state.

	getZipCode = async (term) => {
		const response = await OpenWeatherMap.get('/weather', {
			params: {
				q: term
			},
		})

		  .then(response => { 
		  	if(response) {
		  		this.setState(() => ({errorMessage: null}));
		  	}

		    this.setState({
			weatherData: response.data.main, //Get main temperature from openweathermap json data
			description: response.data.weather[0]
			});

		  }) 

		  .catch(error => {
		  	if(error.response) {
		  		this.setState(() => ({weatherData: null, description: null}));
		  	}
		  		console.log(error.response.data.message);
		  		this.setState(() => ({errorMessage: error.response.data.message.toUpperCase()}));
		  })

		};

	
	render() {

		if(this.state.weatherData === null && this.state.errorMessage === null) {
			return <div><SearchForm zipCode={this.getZipCode} /></div>;
		}

		if (this.state.weatherData && !this.state.errorMessage) {
			return (
				<div>
					<SearchForm zipCode={this.getZipCode} />
					<WeatherList weatherData={this.state.weatherData} description={this.state.description} />
				</div>
			);
		} 

		if(this.state.errorMessage && this.state.weatherData === null ) {
			return (
					<div>
						<SearchForm zipCode={this.getZipCode} />
						<div className="container" style={{marginTop: '20px'}}>{this.state.errorMessage}</div>
					</div>
				);
		}
	}
}

export default App;