'use strict'

class Card {
	constructor(obj) {
		this.id = obj.id;
		this.participants = obj.participants;
		this.time = new Date(obj.time);
		this.game_type = obj.game_type;
	}

	build_card() {
		let card = '';
		if (this.game_type = 'soccer') {
			card += '<div class="card grey-border">';
					card += '<div class="imgs grey-bttm-border">'
					card += `<img src='/assets/img/thumbnails/${this.participants[0]._id}.png' alt='${this.participants[0].name}'>`
					card += `<img src='/assets/img/thumbnails/${this.participants[1]._id}.png' alt='${this.participants[1].name}'>`
					card += '</div>'
				card += '<div class="team-names">';
					for (let i in this.participants) {
						card += this.participants[i].name;
						if (i < this.participants.length - 1)
							card += ' vs ';
					}
				card += '</div>';
				card += '<div class="match-time">';
					card += moment(this.time).fromNow();
				card += '</div>';
			card += '</div>';
		}
		else {
			throw new Error(`Unsupported game type '${this.game_type}'.`);
		}
		document.getElementById('cards').innerHTML += card;
	}
}

window.onstorage = () => {
	document.getElementById('user').innerHTML = window.localStorage.getItem('username');
};

if (window.localStorage.getItem('username') != null) {
	document.getElementById('user').innerHTML = window.localStorage.getItem('username');
}

fetch('/api/cards').then(res => res.json())
.then(data => {
	for (let datum of data) {
		(new Card(datum)).build_card();
	}
	// let card = new Card(data);
	// .build_card();
})
.catch(error => console.log('Error: ', error));
