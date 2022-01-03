import React from 'react';

const WeatherList = (props) => {

	const renderedList = props.weather.map((weatherInfo) => {

		return <div>{weatherInfo}</div>
	});

	return <div>{renderedList}</div>;
	

};

export default WeatherList;