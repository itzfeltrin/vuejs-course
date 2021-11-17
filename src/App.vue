<template>
    <BaseContainer title="Vuex">
        <TheCounter />
        <FavoriteValue />
        <ChangeCounter />
        <button @click="addTen">Add 10</button>
    </BaseContainer>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
    components: {
        BaseContainer,
        TheCounter,
        ChangeCounter,
        FavoriteValue,
    },
    methods: {
        addTen() {
            this.$store.dispatch('increase', 10);
        },
    },
};
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>
