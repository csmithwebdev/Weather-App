import React from 'react';

const WeatherList = (props) => {

		return (
			<div className="container" style={{marginTop: '20px'}}>
				<div><strong>Temperature: </strong>{props.weatherData.temp}</div>
				<div><strong>Description:  </strong>{props.description.description}</div>
				<img alt={props.description.description} src={"http://openweathermap.org/img/wn/" + props.description.icon + ".png"} />
			</div>

			); 


	

};

export default WeatherList;