<template>
    <main>
        <user-data
            :active-user="activeUser"
            :editing="editing"
            @change-active-user="changeActiveUser"
            @toggle-editing="toggleEditing"
        ></user-data>
        <active-user
            :active-user="activeUser"
            @toggle-editing="toggleEditing"
        ></active-user>
    </main>
</template>

<script>
export default {
    data() {
        return {
            activeUser: {
                username: 'Random Killer 3003',
                age: 30,
            },
            editing: false,
        };
    },
    methods: {
        changeActiveUser(newActiveUser) {
            this.activeUser = newActiveUser;
        },
        toggleEditing() {
            this.editing = !this.editing;
        },
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #cfcfcf;
}
section,
form {
    width: clamp(320px, 30%, 480px);
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
