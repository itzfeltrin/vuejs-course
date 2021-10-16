Vue.createApp({
	data() {
		return {
			value: 0,
		};
	},
	methods: {
		clickButton(num) {
			this.value += num;
		},
	},
	computed: {
		result() {
			if (this.value < 37) return "Not there yet";
			if (this.value > 37) return "Too much!";
			return this.value;
		},
	},
	watch: {
		value() {
			const that = this;
			setTimeout(() => {
				that.value = 0;
			}, 5000);
		},
	},
}).mount("#assignment");
