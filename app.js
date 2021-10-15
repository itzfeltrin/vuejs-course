Vue.createApp({
	data() {
		return {
			name: "Pedro Feltrin",
			age: 20,
			imageSource:
				"https://s3.amazonaws.com/freestock-prod/450/freestock_413916.jpg",
			inputValue:
				"I'm learning Vue after learning React and I think it is a lot more straight forward",
		};
	},
	methods: {
		getAgeInFiveYears() {
			return this.age + 5;
		},
		getRandomNumber() {
			return Math.random();
		},
	},
}).mount("#assignment");
