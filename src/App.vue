<template>
    <BaseContainer title="Vuex">
        <TheCounter />
        <ChangeCounter />
        <button @click="addOne">Add 1</button>
    </BaseContainer>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
    components: {
        BaseContainer,
        TheCounter,
        ChangeCounter,
    },
    methods: {
        addOne() {
            this.$store.commit('increment');
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
