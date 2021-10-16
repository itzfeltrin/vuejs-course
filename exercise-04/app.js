Vue.createApp({
	data() {
		return {
			inputValue: "",
			paragraphVisible: true,
			bgColor: "",
		};
	},
	methods: {
		toggleParagraph() {
			this.paragraphVisible = !this.paragraphVisible;
		},
	},
}).mount("#assignment");
