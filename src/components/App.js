import React from 'react';
import axios from 'axios';
import OpenWeatherMap from './apis/OpenWeatherMap'; 
import SearchForm from './SearchForm';
import WeatherList from './WeatherList';

class App extends React.Component {

	state = {weather: [] }; // step 5. set the response we get from api as state.

	getZipCode = async (zipCode) => {
		const response = await OpenWeatherMap.get('/weather', {
			params: {
				q: zipCode
			},

		});

		this.setState({
			weather: response.data.main
		});


	};


	render() {
		return (
			<div>
				<SearchForm zipCode={this.getZipCode} />
				<WeatherList weather={this.state.weather} />
			</div>
		);
	}
}


export default App;