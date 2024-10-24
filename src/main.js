'use strict'

import express from 'express';
const app = express();
const port = 3000

import { DatabaseManager } from './db.js';
let db = null;

app.use('/assets', express.static('site/assets'));
app.use(express.static('site/index/'));
app.use(express.static('site/'));

app.get('/cards', async (req, res) => {
	const cards = await db.get_cards();

	let data = [];
	for (const card of cards) {
		let participants = []
		{
			const participants_temp = []
			for (let participant of card.participants) {
				participants_temp.push(db.get_participant(participant.id));
			}
			participants = await Promise.all(participants_temp);
		}
		data.push({participants: participants, time: 1728828121, game_type: 'soccer'});
	}

	res.json(data);
})

app.get('*', (req, res) => {
	res.writeHead(404, {'Content-Type': 'text/html'});
	res.end('404: Failed to find page.');
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
	db = new DatabaseManager();
})
