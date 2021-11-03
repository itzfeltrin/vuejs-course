<template>
    <ul>
        <li v-for="resource in storedResources" :key="resource.id">
            <LearningResource :resource="resource" />
        </li>
    </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
    components: {
        LearningResource,
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
