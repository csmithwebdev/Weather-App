import React from 'react';
import axios from 'axios';
import OpenWeatherMap from './apis/OpenWeatherMap'; 
import SearchForm from './SearchForm';
import WeatherList from './WeatherList';

class App extends React.Component {

	state = {weatherData: [] }; // step 5. set the response we get from api as state.

	getZipCode = async (term) => {
		const response = await OpenWeatherMap.get('/weather', {
			params: {
				q: term
			},

		});

		this.setState({
			weatherData: response.data.main.temp
		});


	};


	render() {
		return (
			<div>
				<SearchForm zipCode={this.getZipCode} />
				<WeatherList weatherData={this.state.weatherData} />
			</div>
		);
	}
}


export default App;