<template>
    <BaseContainer v-if="isAuthenticated" title="Vuex">
        <TheCounter />
        <FavoriteValue />
        <ChangeCounter />
    </BaseContainer>
    <BaseContainer title="Auth">
        <UserAuth />
    </BaseContainer>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        BaseContainer,
        TheCounter,
        ChangeCounter,
        FavoriteValue,
        UserAuth,
    },
    computed: {
        ...mapGetters(['isAuthenticated']),
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
