Vue.createApp({
	data() {
		return {
			newTask: "",
			tasks: [],
			tasksVisible: true,
		};
	},
	methods: {
		addTask() {
			if (this.newTask.length > 0) {
				this.tasks.push(this.newTask);
				this.newTask = "";
			}
		},
		removeTask(index) {
			this.tasks.splice(index, 1);
		},
		toggleTasks() {
			this.tasksVisible = !this.tasksVisible;
		},
	},
	computed: {
		buttonText() {
			return this.tasksVisible ? "Hide List" : "Show List";
		},
	},
}).mount("#assignment");
