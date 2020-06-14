class Auth {
	login(email, password, cb) {
		return fetch(`http://localhost:3000/users/login`, {
			method: 'POST',
			body: JSON.stringify({
				email,
				password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(data => {
			if(data) {
				localStorage.setItem('accessToken', data.token);
				cb()
			}
			return data;
		})
	}
	logout(cb) {
		localStorage.clear();
		cb();
	}
}

export default new Auth();
