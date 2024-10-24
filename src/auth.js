import { DatabaseManager } from './db.js';

export async function sign_in(req, res, db) {
	const given = { username: req.body.username, password: req.body.password };
	const found = await db.get_user(given.username);
	if (found != null) {
		if (found.password == given.password) {
			return res.status(200).json({successful: true});
		}
		return res.status(401).json({successful: false, reason: 'Incorrect password.'});
	}
	return res.status(401).json({successful: false, reason: 'Username does not exist.'});
}

export async function register(req, res, db) {
	const given = { username: req.body.username, password: req.body.password };
	try {
		let create_status = await db.create_user(given.username, given.password);
		if (create_status) {
			res.status(201).json({successful: true});
		}
		else {
			res.status(400).json({successful: false, reason: 'Username is already taken'});
			console.log('username_taken', create_status);
		}
	} catch (error) {
		console.log(`User '${given.username}' registration failed; error: ${error}`);

		res.status(500).json({sucessful: false, reason: 'Registration failed' });
	}
}
