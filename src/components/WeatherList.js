import React from 'react';
import './WeatherList.css'

const WeatherList = ({cityInfo, weatherData}) => {

const weatherDetails = weatherData.map(getWeatherDetails);

function getWeatherDetails(item) { 
		const weekday = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
		const unixDate = new Date(item.dt * 1000);
		const currentDay = weekday[unixDate.getDay()];
		const maxTemp = Math.trunc(item.temp.max);
		const minTemp = Math.trunc(item.temp.min);

	return [currentDay, item.weather[0].icon, maxTemp, minTemp]
}

console.log(weatherDetails)

	if (weatherDetails[0]) {
		return(
			<div className="container">
				<h2>Weather Forecast</h2>

				<div className="row">
					<div className="col header">Day</div>
					<div className="col header">Desc</div>
					<div className="col header">High</div>
					<div className="col header">Low</div>
				</div>

				<div className="row">
					<div className="col">
						<p>{weatherDetails[0][0]}</p>
					</div>
					<div className="col">
						<img src={`http://openweathermap.org/img/w/${weatherDetails[0][1]}.png`}/>
					</div>
					<div className="col">
						<p>{weatherDetails[0][2]}</p>
					</div>
					<div className="col">
						<p>{weatherDetails[0][3]}</p>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<p>{weatherDetails[1][0]}</p>
					</div>
					<div className="col">
						<img src={`http://openweathermap.org/img/w/${weatherDetails[1][1]}.png`}/>
					</div>
					<div className="col">
						<p> {weatherDetails[1][2]} </p>
					</div>
					<div className="col">
						<p> {weatherDetails[1][3]} </p>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<p>{weatherDetails[2][0]}</p>
					</div>
					<div className="col">
						<img src={`http://openweathermap.org/img/w/${weatherDetails[2][1]}.png`}/>
					</div>
					<div className="col">
						<p>{weatherDetails[2][2]}</p>
					</div>
					<div className="col">
						<p>{weatherDetails[2][3]}</p>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<p>{weatherDetails[3][0]}</p>
					</div>
					<div className="col">
						<img src={`http://openweathermap.org/img/w/${weatherDetails[3][1]}.png`}/>
					</div>
					<div className="col">
						<p> {weatherDetails[3][2]} </p>
					</div>
					<div className="col">
						<p>{weatherDetails[3][3]}</p>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<p>{weatherDetails[4][0]}</p>
					</div>
					<div className="col">
						<img src={`http://openweathermap.org/img/w/${weatherDetails[4][1]}.png`}/>
					</div>
					<div className="col">
						<p> {weatherDetails[4][2]} </p>
					</div>
					<div className="col">
						<p> {weatherDetails[4][3]} </p>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<p>{weatherDetails[5][0]}</p>
					</div>
					<div className="col">
						<img src={`http://openweathermap.org/img/w/${weatherDetails[5][1]}.png`}/>
					</div>
					<div className="col">
						<p> {weatherDetails[5][2]} </p>
					</div>
					<div className="col">
						<p> {weatherDetails[5][3]} </p>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<p>{weatherDetails[6][0]}</p>
					</div>
					<div className="col">
						<img src={`http://openweathermap.org/img/w/${weatherDetails[6][1]}.png`}/>
					</div>
					<div className="col">
						<p> {weatherDetails[5][2]} </p>
					</div>
					<div className="col">
						<p> {weatherDetails[5][3]} </p>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<p>{weatherDetails[7][0]}</p>
					</div>
					<div className="col">
						<img src={`http://openweathermap.org/img/w/${weatherDetails[7][1]}.png`}/>
					</div>
					<div className="col">
						<p> {weatherDetails[7][2]} </p>
					</div>
					<div className="col">
						<p> {weatherDetails[7][3]} </p>
					</div>
				</div>				
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default WeatherList;

