import axios from 'axios';
const API_KEY = '319235075a82d5c933c1ee838aee3423';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const REQ_URL = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(REQ_URL);
	console.log('Request: ', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}