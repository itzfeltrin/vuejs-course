<template>
    <ul>
        <li v-for="resource in resources" :key="resource.id">
            <LearningResource :resource="resource" />
        </li>
    </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
    components: {
        LearningResource,
    },
    inject: ['resources'],
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>
