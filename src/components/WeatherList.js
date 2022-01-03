import React from 'react';

const WeatherList = (props) => {

		return (
			<div className="container" style={{marginTop: '20px'}}>
				<div>{props.weatherData.temp}</div>
				<div>{props.description.description}</div>
				<img src={"http://openweathermap.org/img/wn/" + props.description.icon + ".png"} />
			</div>

			); 


	

};

export default WeatherList;