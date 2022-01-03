//TODO:
//if we dont have the data yet. don't dipslay the text...
// handle errors in zipcode...

import React from 'react';
import axios from 'axios';
import OpenWeatherMap from './apis/OpenWeatherMap'; 
import SearchForm from './SearchForm';
import WeatherList from './WeatherList';

class App extends React.Component {

	state = {weatherData: [], description: [] }; //set the response we get from api as state.

	getZipCode = async (term) => {
		const response = await OpenWeatherMap.get('/weather', {
			params: {
				q: term
			},

		});

		this.setState({
			weatherData: response.data.main, //Get main temperature from openweathermap json data
			description: response.data.weather[0]
		});


	};


	render() {

		if (!this.state.weatherData && !this.state.description) {
			return <div>No Data</div>;
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
