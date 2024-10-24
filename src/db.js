import { MongoClient } from 'mongodb';
const DB_NAME = 'hedge_test';
const DB_URI = `mongodb://localhost:27017/${DB_NAME}`;
const DB_CLIENT = new MongoClient(DB_URI);

export class DatabaseManager {
	constructor() {
		console.log('Connecting to the Database..')
		this.db = DB_CLIENT.db(DB_NAME);
		console.log('Connection successfully established.')
	}

	async get_cards() {
		try {
			return await this.db.collection("cards").find().toArray();
		}
		catch(error) {
			console.log(`Database Error: ${error}`)
		}
	}

	async get_participant(id) {
		try {
			return this.db.collection("participants").findOne({_id: id});
		}
		catch(error) {
			console.log(`Database Error: ${error}`)
		}
	}
	
	async get_user(username) {
		return await this.db.collection('users').findOne({username});
	}

	async create_user(username, password) {
		const user_exists = await this.get_user(username);
		if (user_exists == null) {
			await this.db.collection('users').insertOne({username, password});
			return true;
		}
		return false;
	}
}
