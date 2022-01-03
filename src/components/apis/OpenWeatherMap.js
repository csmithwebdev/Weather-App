import React from 'react';
import axios from 'axios';

const APPID = 'd9347e4e650b022f26f0990856107ac1';

export default axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5',
		params: {
			appid: APPID
		}
});