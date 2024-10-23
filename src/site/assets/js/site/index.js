'use strict'

class Card {
	constructor(objs) {
		for (let obj of objs) {
			this.id = obj.id;
			this.participants = obj.participants;
			this.time = new Date(obj.time);
			this.game_type = obj.game_type;
		}
	}

	build_card() {
		let card = '';
		if (this.game_type = "soccer") {
			card += '<div class="card">';
					card += '<div class="imgs grey-bttm-border">'
					card += `<img src="/assets/img/thumbnails/${this.participants[0].id}.png" alt="${this.participants[0].name}">`
					card += `<img src="/assets/img/thumbnails/${this.participants[1].id}.png" alt="${this.participants[1].name}">`
					card += '</div>'
				card += '<div class="team-names">';
					for (let i in this.participants) {
						card += this.participants[i].name;
						if (i < this.participants.length - 1)
							card += ' vs ';
					}
				card += '</div>';
				card += '<div class="match-time">';
					card += 'October 24, 2024 - 18:00'; // FIXME: enter date properly
				card += '</div>';
			card += '</div>';
		}
		else {
			throw new Error(`Unsupported game type '${this.game_type}'.`);
		}
		document.getElementById("cards").innerHTML += card;
	}
}

fetch("/cards").then(res => res.json())
.then(data => (new Card(data)).build_card())
.catch(error => console.log("Error: ", error));
