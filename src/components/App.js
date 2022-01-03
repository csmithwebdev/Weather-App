//TODO:
// handle errors in zipcode...

import React from 'react';
import axios from 'axios';
import OpenWeatherMap from './apis/OpenWeatherMap'; 
import SearchForm from './SearchForm';
import WeatherList from './WeatherList';

class App extends React.Component {

	state = {weatherData: null, description: null}; //set the response we get from api as state.
	errors = { errorMessage: '' };

	getZipCode = async (term) => {
		const response = await OpenWeatherMap.get('/weather', {
			params: {
				q: term
			},
		})

		  .then(response => { 
		    this.setState({
			weatherData: response.data.main, //Get main temperature from openweathermap json data
			description: response.data.weather[0]
			});
		  }) 

		  .catch(error => {
		  	console.log(error.response.data);
		   	this.setState(error.response.data);

		  })
		};



//the issue is because Im setting state, not sure why yet...


	
	render() {

		if (this.state.errorMessage) {
			return (
				<div>
					<SearchForm zipCode={this.getZipCode} /><br />
					<div className="container">{this.state.errorMessage}</div>
				</div>
			);
		} else if (!this.state.weatherData) {

			return (
					<SearchForm zipCode={this.getZipCode} />
				);

		} else {

			return (
			<div>
				<SearchForm zipCode={this.getZipCode} />
				<WeatherList weatherData={this.state.weatherData} description={this.state.description} />
			</div>
			);
		}
	}
}


export default App;


/*
if (this.state.errorMessage && !this.state.weatherData) {
			return (
				<div>
					<SearchForm zipCode={this.getZipCode} /><br />
					<div className="container">{this.state.errorMessage}</div>
				</div>
			);
		} 

		if (!this.state.errorMessage && this.state.weatherData) {
			return (
			<div>
				<SearchForm zipCode={this.getZipCode} />
				<WeatherList weatherData={this.state.weatherData} description={this.state.description} />
			</div>
			);
		}*/