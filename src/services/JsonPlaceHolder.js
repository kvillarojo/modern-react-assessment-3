import jsonAPI from "../api/api";

export class JsonPlaceHolder {

	constructor(url){
		this.url = url
	}

	setEndpoint(endpoint){
		this.url = endpoint
	}

	get() {
		try{
			return jsonAPI.get(this.url)
				.then(response => response.data)
		}catch(err){
			throw new Error(err)
		}
	}

	post(data) {
		try{
			return jsonAPI.post(this.url, {
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
			return jsonAPI.delete(this.url)
				.then(() => data)
		}catch(err) {
			throw new Error(err)
		}
	}
}


