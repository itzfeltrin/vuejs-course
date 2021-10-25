<template>
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="username">Username</label>
            <input
                type="text"
                class="form-control"
                id="username"
                v-model="newUser.username"
                placeholder="Enter username"
            />
        </div>
        <div class="form-group">
            <label for="age">Age</label>
            <input
                type="number"
                class="form-control"
                id="age"
                v-model="newUser.age"
                placeholder="Enter age"
            />
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    /* eslint-disable indent */
    props: ['activeUser', 'editing'],
    emits: ['change-active-user', 'toggle-editing'],
    watch: {
        editing: function(value) {
            console.log('changed');
            if (value) {
                this.newUser = { ...this.activeUser };
            }
        },
    },
    data() {
        return {
            newUser: this.editing
                ? this.activeUser
                : {
                      username: '',
                      age: 18,
                  },
        };
    },
    methods: {
        onSubmit() {
            this.$emit('change-active-user', this.newUser);
            this.newUser = {
                username: '',
                age: 18,
            };
            if (this.editing) {
                this.$emit('toggle-editing');
            }
        },
    },
};
</script>

<style>
.form-group {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}
input {
    flex: 1;
}
label {
    flex: 0 0 5rem;
    /* text-align: right; */
}
input,
button {
    height: 2rem;
    padding: 0 1rem;
}
button {
    width: 100%;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    cursor: pointer;
}
</style>
