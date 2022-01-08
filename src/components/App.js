import React from 'react';
import axios from 'axios';
import OpenWeatherMap from './apis/OpenWeatherMap'; 
import SearchForm from './SearchForm';
import WeatherList from './WeatherList';

class App extends React.Component {

	state = {weatherData: [], errorMessage: null, cityInfo: null} //set the response we get from api as state.

	getZipCode = async (term) => {
		const response = await OpenWeatherMap.get('/forecast', {
			params: {
				zip: term
			},
		})


		
		  .then(response => { 
		  	if(response) {
		  		this.setState(() => ({errorMessage: null}));
		  	}

		    this.setState({
			weatherData: response.data.list,
			cityInfo: response.data.city.name
			});

				//console.log(this.state.weatherData);

		  }) 


		  .catch(error => {
		  	if(error.response) {
		  		this.setState(() => ({weatherData: null}));
		  		this.setState(() => ({weatherData: null}));
		  	}
		  		this.setState(() => ({errorMessage: 'Please enter a valid zipcode'}));
		  })

		};


	
	render() {

		if(this.state.weatherData === null && this.state.errorMessage === null) {
			return <div><SearchForm ZipCode={this.getZipCode} /></div>;
		}

		if (this.state.weatherData && !this.state.errorMessage) {
			return (
				<div>
					<SearchForm ZipCode={this.getZipCode} />
					<WeatherList weatherData={this.state.weatherData} cityInfo={this.state.cityInfo} />
				</div>
			);
		} 

		if(this.state.errorMessage && this.state.weatherData === null ) {
			return (
					<div>
						<SearchForm ZipCode={this.getZipCode} />
						<div className="container" style={{marginTop: '20px'}}>{this.state.errorMessage}</div>
					</div>
				);
		}
	}
}

export default App;