Vue.createApp({
	data: () => ({
		newTodo: "",
		todoList: [],
	}),
	methods: {
		addTodo(e) {
			e.preventDefault();
			if (this.newTodo.trim().length > 0) {
				this.todoList.push(this.newTodo);
				this.newTodo = "";
			}
		},
	},
}).mount("#app");
