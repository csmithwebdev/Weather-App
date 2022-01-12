import React from 'react';

const WeatherList = ({cityInfo, weatherData}) => {

const weatherDetails = weatherData.map(getWeatherDetails);
const dailyWeatherArray = weatherDetails.filter(getDailyWeatherArray);

//Get a single array of days and temperatures
function getWeatherDetails(item) { 
		const weekday = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
		const unixDate = new Date(item.dt * 1000);
		const currentDay = weekday[unixDate.getDay()];	

	return [currentDay, item.main.temp]
}

console.log(weatherData);

//Get single array of Wednesday data
function getDailyWeatherArray(item) {
	return item.indexOf('Wed')!== -1;
}

const maxTemp = Math.max.apply(Math, dailyWeatherArray.map(function(i) {
	return i[1];
}))

const currentDayMaxTempArray = dailyWeatherArray.find(function(o){
	return o[1] == maxTemp;
})	

if(currentDayMaxTempArray !== undefined) {
	var day = currentDayMaxTempArray[0];
}


		return(
			<div className="container">
				<br />
				<h3>{cityInfo}</h3>
				<p>{day} {maxTemp !== -Infinity ? maxTemp : ''}</p> <br />
			</div>
		);

};

export default WeatherList;




/*function getDayOfWeek() {
			const weekday = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
			const unixDate = new Date(weather.dt * 1000);
			const currentDay = weekday[unixDate.getDay()];
			return currentDay;
		}*/