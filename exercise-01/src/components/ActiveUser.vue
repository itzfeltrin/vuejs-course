<template>
    <section>
        <h2>Username: {{ activeUser.username }}</h2>
        <h3>Age: {{ activeUser.age }}</h3>
        <button @click="editUser" class="edit-button">Edit</button>
    </section>
</template>

<script>
export default {
    props: ['activeUser'],
    emits: ['toggle-editing'],
    methods: {
        editUser() {
            this.$emit('toggle-editing', true);
        },
    },
};
</script>

<style>
.edit-button {
    margin-top: 10px;
}
</style>
