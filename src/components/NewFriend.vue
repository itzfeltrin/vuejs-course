<template>
    <section>
        <header>
            <h1>Add new friend</h1>
        </header>
        <form @submit.prevent="handleSubmit">
            <label>
                Name:
                <input
                    v-model="newFriend.name"
                    type="text"
                    placeholder="Enter your friend's name"
                />
            </label>
            <label>
                Phone:
                <input
                    v-model="newFriend.phone"
                    type="tel"
                    placeholder="Enter your friend's phone"
                />
            </label>
            <label>
                Email:
                <input
                    v-model="newFriend.email"
                    type="email"
                    placeholder="Enter your friend's email"
                />
            </label>
            <label>
                Is this your favorite friend:
                <input v-model="newFriend.isFavorite" type="checkbox" />
            </label>
            <button type="submit">Add</button>
        </form>
    </section>
</template>

<script>
const initialNewFriendData = {
    name: '',
    phone: '',
    email: '',
    isFavorite: false,
};

export default {
    emits: ['add-new-friend'],
    data() {
        return {
            newFriend: {
                ...initialNewFriendData,
            },
        };
    },
    methods: {
        handleSubmit() {
            this.$emit('add-new-friend', this.newFriend);

            this.newFriend = { ...initialNewFriendData };
        },
    },
};
</script>

<style>
form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
}
form label {
    display: flex;
    align-items: center;
    gap: 1.25rem;
}
form label input:not([type='checkbox']) {
    flex: 1;
    height: 2.25rem;
}
form button[type='submit'] {
    grid-column: span 2;
    height: 2.25rem;
}
</style>
