import axios from 'axios';

const requests = axios.create({
	baseURL:'http://localhost:8000',
	timeout:1000
});

export default{
	requests
}