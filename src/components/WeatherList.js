import React from 'react';

const WeatherList = ({cityInfo, weatherData}) => {


		const renderedItems = weatherData.map((weather) => {
		//we need to set state here.

		function getDayOfWeek() {
			const weekday = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
			const unixDate = new Date(weather.dt * 1000);
			return weekday[unixDate.getDay()];
		}

		function getFiveDays() {
			const firstDay = new Date(weather.dt * 1000);
			const todaysDate = new Date();

		}
		

		return (
			<div className="" style={{marginTop: '10px'}} key={weather.dt}>
				<div><strong>Temperature: </strong>{JSON.stringify(weather.main.temp)}</div> {/*convert objects to text*/}
				<div>{getDayOfWeek()}</div>
			</div>


			); 

		});

		return(
			<div className="container">
				<br />
				<h3>{cityInfo}</h3>
				{renderedItems}
			</div>
		);

	
	


	

};

export default WeatherList;



{/*var myDate = new Date( 1641589200 *1000);
console.log(myDate.toGMTString()+"<br>"+myDate.toLocaleString());*/}


{/*const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var myDate = new Date( 1641589200 *1000);
console.log(weekday[myDate.getDay()]);*/}