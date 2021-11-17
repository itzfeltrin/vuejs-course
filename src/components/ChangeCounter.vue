<template>
    <button @click="increment">Add 2</button>
    <button @click="increase(10)">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // addTwo() {
        //     this.$store.dispatch('increment');
        // },
        // addTen() {
        //     this.$store.dispatch('increase', 10);
        // },
        ...mapActions(['increment', 'increase']),
    },
};
</script>
