const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: 0,
					name: "Ted Mosby",
					phone: "0123 4565 123",
					email: "tedmosby@aol.com",
				},
				{
					id: 1,
					name: "Barney Stinson",
					phone: "0123 1231 789",
					email: "barney@gmail.com",
				},
			],
		};
	},
});

app.component("friend-component", {
	props: ["friend"],
	data() {
		return {
			detailsVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsVisible = !this.detailsVisible;
		},
	},
	template: `
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetails">Show Details</button>
		<ul v-if="detailsVisible">
			<li><strong>Phone:</strong> {{ friend.phone }}</li>
			<li><strong>Email:</strong> {{ friend.email }}</li>
		</ul>
	</li>
	`,
});

app.mount("#app");
