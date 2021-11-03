<template>
    <TheHeader title="RememberMe" />
    <StoredResources :resources="storedResources" />
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layout/TheHeader.vue';

export default {
    components: {
        StoredResources,
        TheHeader,
    },
    data() {
        return {
            storedResources: [
                {
                    id: 1,
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org',
                },
                {
                    id: 2,
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://google.com',
                },
            ],
        };
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>
