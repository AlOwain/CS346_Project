const http = require("http");
const fs = require("fs");
const path = require("path");

const express = require('express')
const app = express()
const port = 3000

app.use('/assets', express.static('site/assets'));
app.use(express.static('site/html'));

app.get('/cards', (req, res) => {
	const data = [
		{
			id: 1,
			participants: [
				{ id: 1, name: 'Team A' },
				{ id: 2, name: 'Team B' }
			],
			time: 1728828121,
			game_type: 'soccer'
		}
	]
	res.json(data);
})

app.get('*', (req, res) => {
	res.writeHead(404, {'Content-Type': 'text/html'});
	res.end('404: Failed to find page.');
})


app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
