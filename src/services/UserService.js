import axios from "axios";

const API_ROOT = 'https://jsonplaceholder.typicode.com/'

export class UserService {

	constructor(url){
		this.url = url
	}

	setEndpoint(endpoint){
		this.url = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
	}

	get() {
		try{
			return axios.get(this.url)
				.then(response => response.data)
		}catch(err){
			throw new Error(err)
		}
	}

	post(data) {
		try{
			return axios.post(this.url, {
				params: {
					...data
				}
			})
				.then(response => response.data)
		}catch(err){
			throw new Error(err)
		}
	}

	delete(data){
		try {
			return axios.delete(this.url)
				.then(() => data)
		}catch(err) {
			throw new Error(err)
		}
	}
}


