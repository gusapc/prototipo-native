export default {

	host: 'http://localhost:3000',

	getUsers () {
		return this.makeRequest({
			url: `${this.host}/users`
		});
	},

	makeRequest ({ url=null, method='GET', data={}, headers={} }) {
		let options = {
			method,
			headers,
		};

		if (method === 'POST' || method == 'PUT')
			options.body = JSON.stringify(data);

		return fetch(url, options);
	}
};
