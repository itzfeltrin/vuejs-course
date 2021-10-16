Vue.createApp({
	data: () => ({
		firstInputValue: "",
		secondInputValue: "",
	}),
	methods: {
		showAlert() {
			alert("I'm enjoying this course so far!");
		},
		handleFirstInput(e) {
			this.firstInputValue = e.target.value;
		},
		handleSecondInput(e) {
			this.secondInputValue = e.target.value;
		},
	},
}).mount("#assignment");
