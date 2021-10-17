const getRandomValue = (min, max) =>
	Math.floor(Math.random() * (max - min)) + min;

const initialState = {
	monsterHealth: 100,
	playerHealth: 100,
	logs: [],
	currentRound: 0,
	specialAttackUsedRound: null,
	gameWinner: null,
};

Vue.createApp({
	data() {
		return { ...initialState };
	},
	methods: {
		addLog(log) {
			this.logs.unshift(log);
		},
		attackMonster(value = null) {
			const playerAttackValue = value ?? getRandomValue(5, 12);
			this.monsterHealth -= playerAttackValue;
			this.addLog(
				`<span class="log--player">Player's</span> attack dealt <span class="log--damage">${playerAttackValue} damage!</span>`
			);
			this.attackPlayer();
		},
		attackPlayer() {
			const monsterAttackValue = getRandomValue(8, 15);
			this.playerHealth -= monsterAttackValue;
			this.addLog(
				`<span class="log--monster">Monster's</span> attack dealt <span class="log--damage">${monsterAttackValue} damage!</span>`
			);
		},
		specialAttack() {
			const playerAttackValue = getRandomValue(10, 25);
			this.attackMonster.bind(null, playerAttackValue)();
			this.specialAttackUsedRound = this.currentRound;
		},
		heal() {
			const healValue = getRandomValue(5, 20);
			if (this.playerHealth + healValue > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += healValue;
			}
			this.addLog(
				`<span class="log--player">Player</span> healed <span class="log--heal">${healValue} HP!</span>`
			);
			this.attackPlayer();
		},
		surrender() {
			this.playerHealth = 0;
			this.gameWinner = "monster";
			this.addLog(`<span class="log--player">Player</span> surrended!`);
		},
		restart() {
			Object.keys(initialState).forEach((key) => {
				this[key] = initialState[key];
			});
		},
	},
	computed: {
		playerHealthBarStyles() {
			return { width: `${this.playerHealth}%` };
		},
		monsterHealthBarStyles() {
			return { width: `${this.monsterHealth}%` };
		},
		isSpecialAttackAvailable() {
			return this.specialAttackUsedRound !== null;
		},
	},
	watch: {
		playerHealth(value) {
			this.currentRound++;
			if (value > 100) this.playerHealth = 100;
			else if (value < 0) {
				this.gameWinner = "monster";
				this.playerHealth = 0;
			}
		},
		monsterHealth(value) {
			if (value > 100) this.monsterHealth = 100;
			else if (value < 0) {
				this.gameWinner = "player";
				this.monsterHealth = 0;
			}
		},
		currentRound(value) {
			if (value === 0) {
				this.addLog(`Game started!`);
			}
			if (
				this.specialAttackUsedRound !== null &&
				value - this.specialAttackUsedRound >= 3
			)
				this.specialAttackUsedRound = null;
		},
	},
}).mount("#game");
