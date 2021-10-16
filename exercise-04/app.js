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
	computed: {
		paragraphClasses() {
			return {
				[this.inputValue]: true,
				visible: this.paragraphVisible,
				hidden: !this.paragraphVisible,
			};
		},
	},
}).mount("#assignment");
