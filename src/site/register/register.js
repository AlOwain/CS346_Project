const form = document.getElementById('register-form');

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const form_data = {
		username: document.getElementById('username').value,
		password: document.getElementById('password').value,
	};

	try {
		const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
						'Content-Type': 'application/json',
				},
				body: JSON.stringify(form_data),
		});

		const result = await response.json();
		if (!result.successful) {
			document.getElementById('err').innerText = result.reason;
			document.getElementById('err').style.display = 'block';
		} else {
			document.getElementById('err').style.display = 'none';
			// Go to main page and log in
			localStorage.setItem('username', form_data.username); 
		}
	} catch (error) {
		console.error('Error:', error);
	}
});
