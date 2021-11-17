<template>
    <button v-if="!isAuthenticated" @click="logIn">login</button>
    <button v-else @click="logOut">logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['isAuthenticated']),
    },
    methods: {
        ...mapActions(['logIn', 'logOut']),
    },
};
</script>
